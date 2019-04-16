from django import template



register = template.Library()

@register.filter
def percentof(value):
    return format(value, "%")