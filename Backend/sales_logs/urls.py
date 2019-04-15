from django.urls import include, path

from . import views

urlpatterns = [
    path('', views.SalesLogListView.as_view(), name='sales-log-list'),
    path('<int:pk>/', views.SalesDetailView.as_view(), name='sales-log-details'),
]