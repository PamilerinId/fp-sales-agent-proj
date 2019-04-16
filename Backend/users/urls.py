from django.urls import include, path

from . import views

urlpatterns = [
    path('', views.UserListView.as_view(), name='users-list'),
    path('<int:pk>/', views.UserDetailView.as_view(), name='user-details'),
    path('agents/', views.AgentListView.as_view(), name='agents-list'),
    path('agents/<int:user_id>/',
         views.AgentDetailView.as_view(), name='agent-details'),
]