from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.conf import settings
from .models import Agent, CustomUser



class ProfileInline(admin.StackedInline):
    model = Agent
    can_delete = False
    verbose_name_plural = 'Agent'
    fk_name = 'user'


class CustomUserAdmin(UserAdmin):
    inlines = (ProfileInline, )
    list_display = ('username', 'first_name', 'last_name', 'is_staff')
    list_select_related = ( 'agent', )

    fieldsets = (
        ('Personal information', {'fields': ('first_name', 'last_name', 'email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        ('None', {
            'classes': ('wide',),
            'fields': ('first_name','last_name', 'email', 'password1', 'password2')}
        ),
    )


    def get_inline_instances(self, request, obj=None):
        if not obj:
            return list()
        return super(CustomUserAdmin, self).get_inline_instances(request, obj)


admin.site.register(CustomUser, CustomUserAdmin)