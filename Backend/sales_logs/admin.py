from django.contrib import admin
from .models import SalesLog

# Register your models here.
@admin.register(SalesLog)
class SalesLogAdmin(admin.ModelAdmin):
    list_display = ('uuid','agent', 'plan_sold', 'commission_made', 'init_date')
    search_fields = ('agent', 'plan_sold', 'init_date')
    # change_list_template = 'admin/sale_change_list.html'
    # date_hierarchy = 'init_date'

