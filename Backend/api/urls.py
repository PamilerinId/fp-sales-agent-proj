from django.urls import include, path, re_path

from . import views


urlpatterns = [
    path('', views.api_root),  # Api Root
    path('users/', include('users.urls')),
    path('plans/', include('plans.urls')),
    path('sales_logs/', include('sales_logs.urls')),
]