from django.http import HttpResponse, JsonResponse
from .models import *
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from django.core import serializers
from rest_framework.response import Response
from dotenv import load_dotenv
import os
def sendhome():
    homepage = open('static/index.html').read()
    return HttpResponse(homepage)
# Create your views here.
def home(request):
    homepage = open('static/index.html').read()
    return HttpResponse(homepage)

@api_view(['POST','GET'])
def sign_up(request):
    if request.method =='POST':
        try:
            user=AppUser.objects.create_user(name=request.data['name'], username=request.data['email'], password=request.data['password'], email=request.data['email'])
            Cart.objects.create(user=user)
            return JsonResponse({'signup':True})
        except Exception as e:
            print(str(e))
            return JsonResponse({'signup':False})
    if request.method == "GET":
        return sendhome()

@api_view(['POST', "GET"])
def log_in(request):
    if request.method == "POST":
        email = request.data['email']
        password=request.data['password']
        user = authenticate(username= email, password = password)
        if user is not None:
            if user.is_active:
                try:
                    login(request._request, user)
                except Exception as e:
                    print(str(e))
                return JsonResponse({'success':True})
            else: 
                return JsonResponse({'success':False})
        else:
            return JsonResponse({'success':False})
    else:
        return sendhome()
    
@api_view(['POST'])
def log_out(request):
    try:
        logout(request)
        return JsonResponse({'signout':True})
    except Exception as e:
        print(e)
        return JsonResponse({'signout':False})

@api_view(['GET'])                
def curr_user(request):
    if request.user.is_authenticated:
        data= serializers.serialize("json", [request.user], fields=['name', 'email', 'password'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})

@api_view(['GET'])
def items(request):
    return sendhome()

@api_view(['GET', 'PUT', 'DELETE'])
def item(request, id):
    pass

api_view(['GET'])
def cart(request):
    pass