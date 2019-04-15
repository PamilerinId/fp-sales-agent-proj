from django.shortcuts import render
from rest_framework import generics, permissions, status, views
from .models import SalesLog
from . import serializers

# Create your views here.

class SalesLogListView(generics.ListCreateAPIView):
    """
       Lists all logs
    """
    serializer_class = serializers.SalesLogSerializer
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        queryset = SalesLog.objects.all()
        return queryset


class SalesDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
       log details
    """
    serializer_class = serializers.SalesLogSerializer
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        queryset = SalesLog.objects.all()
        return queryset