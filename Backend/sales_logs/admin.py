from django.contrib import admin
from django.db.models import (Count, Sum, Min, Max, DateTimeField)
from django.db.models.functions import Trunc
from .models import SalesLog


def get_next_in_date_hierarchy(request, date_hierarchy):
    if date_hierarchy + '__day' in request.GET:
        return 'hour'

    if date_hierarchy + '__month' in request.GET:
        return 'day'

    if date_hierarchy + '__year' in request.GET:
        return 'week'

    return 'month'


# Register your models here.
@admin.register(SalesLog)
class SalesLogAdmin(admin.ModelAdmin):
    list_display = ('uuid','agent', 'commission_made', 'init_date')
    search_fields = ('agent', 'plan_sold', 'init_date')
    change_list_template = 'admin/sale_change_list.html'
    date_hierarchy = 'init_date'
    list_filter = ('plan_sold', 'init_date')
    # Prevent additional queries for pagination.
    show_full_result_count = False

    def changelist_view(self, request, extra_context=None):
        response = super().changelist_view(
            request,
            extra_context=extra_context,
        )
        
        # self.get_queryset would return the base queryset. ChangeList
        # apply the filters from the request so this is the only way to
        # get the filtered queryset. 

        try:
            qs = response.context_data['cl'].queryset
        except (AttributeError, KeyError):
            # When an invalid filter is used django will redirect. In this
            # case the response is an http redirect response and so it has
            # no context_data.
            return response

        metrics = {
            'total': Count('uuid'),
            'total_sales': Sum('plan_sold__cost'),
        }

        response.context_data['summary'] = list(
            qs
            .values('plan_sold__name')
            .annotate(**metrics)
            .order_by('-total_sales')
        )

        response.context_data['summary_total'] = dict(
            qs.aggregate(**metrics)
        )

        period = get_next_in_date_hierarchy(request, self.date_hierarchy)
        response.context_data['period'] = period

        summary_over_time = qs.annotate(
            period=Trunc('init_date', period, output_field=DateTimeField()),
        ).values('period').annotate(total=Sum('plan_sold__cost')).order_by('period')

        summary_range = summary_over_time.aggregate(
            low=Min('total'),
            high=Max('total'),
        )
        high = summary_range.get('high', 0)
        low = summary_range.get('low', 0)

        response.context_data['summary_over_time'] = [{
            'period': x['period'],
            'total': x['total'] or 0,
            'pct': \
               ((x['total'] or 0) - low) / (high - low) * 100
               if high > low else 0,
        } for x in summary_over_time]

        return response
