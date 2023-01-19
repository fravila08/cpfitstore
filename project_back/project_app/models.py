
from email.policy import default
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.http import HttpResponse
# Create your models here.

class AppUser(AbstractUser):
    name = models.CharField(max_length=250, null=False, default='unkown')
    email = models.EmailField(
        verbose_name='email address',
        max_length= 255,
        unique=True,
    )
    USERNAME_FIELD= 'email'
    REQUIRED_FIELDS= []

class Cart(models.Model):
    user=models.ForeignKey(AppUser, on_delete=models.CASCADE)
    
class Item(models.Model):
    Title=models.CharField(max_length=250, default="unknown", null=False)
    Image=models.TextField(null=True)
    Price=models.FloatField(default=0.00)
    quantity=models.IntegerField(null=True)
    Cart=models.ForeignKey(Cart, null=True, on_delete=models.CASCADE)


    
    