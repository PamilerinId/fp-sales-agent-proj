from django.urls import include, path

from . import views

urlpatterns = [
    path('', views.PlanListView.as_view(), name='plans-list'),
    path('<int:pk>/', views.PlanDetailView.as_view(), name='plan-details'),
]