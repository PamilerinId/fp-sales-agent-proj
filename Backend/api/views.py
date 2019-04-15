from django.shortcuts import render
from django.shortcuts import render
from django.http import HttpResponseRedirect
from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.exceptions import NotFound
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

# Create your views here.

@api_view(['GET'])
@permission_classes((permissions.AllowAny, ))
def api_root(request, format=None):
    ''' 
    API root endpoint showing all available endpoints.
    Visible by all
    '''
    return Response({
        'users': reverse('users-list', request=request, format=format),
        'plans': reverse('plans-list', request=request, format=format),
        'sales_logs': reverse('sales-log-list', request=request, format=format),
       })
