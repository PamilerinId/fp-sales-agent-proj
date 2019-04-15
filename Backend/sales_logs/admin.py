from django.contrib import admin
from .models import SalesLog

# Register your models here.
@admin.register(SalesLog)
class SalesLogAdmin(admin.ModelAdmin):
    list_display = ('uuid','agent', 'plan_sold', 'commision_made', 'init_date')
    search_fields = ('agent', 'plan_sold', 'init_date')
