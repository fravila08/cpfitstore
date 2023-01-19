from django.urls import path, include, re_path
from . import views

urlpatterns = [
    path('', views.home),
    path('allitems/', views.items),
    path('signup/', views.sign_up),
    path('signin/', views.log_in),
    path('sign_out/', views.log_out),
    path('curr_user/', views.curr_user),
    path('item/<int:id>/', views.item),
    path('cart/', views.cart),
]
