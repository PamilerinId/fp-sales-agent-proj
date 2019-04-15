from django.shortcuts import render
from rest_framework import generics, permissions, status, views
from .models import CustomUser, Agent
from . import serializers

# Create your views here.


class UserListView(generics.ListCreateAPIView):
    """
    Lists all users *should be admin only

    """
    serializer_class = serializers.CustomUserSerializer
    permission_classes = (permissions.AllowAny,)
    # monkey:rem: set to admin only
    def get_queryset(self):
        queryset = CustomUser.objects.all()
        return queryset


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Shows particular user Details

    """
    serializer_class = serializers.CustomUserSerializer
    permission_classes = (permissions.AllowAny,)
    # monkey:rem: set to admin only
    def get_queryset(self):
        queryset = CustomUser.objects.all()
        return queryset


class AgentListView(generics.ListCreateAPIView):
    """
    List view for agents
    """
    serializer_class = serializers.AgentSerializer
    permission_classes = (permissions.AllowAny,)
    # monkey:rem: set to admin only
    def get_queryset(self):
        queryset = Agent.objects.all()
        return queryset


class AgentDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Detail view for agents
    """
    serializer_class = serializers.AgentSerializer
    lookup_field = 'user_username'
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        queryset = Agent.objects.all()  # filter(account_type= '1')
        return queryset
