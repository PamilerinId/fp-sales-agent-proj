from django.contrib import admin
from .models import Plan

# Register your models here.

@admin.register(Plan)
class PlanAdmin(admin.ModelAdmin):
    list_display = ('uuid','name', 'description', 'cost')
    search_fields = ('name',)
