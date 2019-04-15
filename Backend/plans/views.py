from django.shortcuts import render
from rest_framework import generics, permissions, status, views
from .models import Plan
from . import serializers

# Create your views here.

class PlanListView(generics.ListCreateAPIView):
    """
       Lists all plans
    """
    serializer_class = serializers.PlanSerializer
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        queryset = Plan.objects.all()
        return queryset


class PlanDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
        Plan Details
    """
    serializer_class = serializers.PlanSerializer
    permission_classes = (permissions.AllowAny,)
    
    def get_queryset(self):
        queryset = Plan.objects.all()
        return queryset