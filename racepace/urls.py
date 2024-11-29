
from django.contrib import admin
from django.urls import path, include
from landing_page import views

urlpatterns = [
    path('', views.home, name='home'),
    path('', include('raceposts.urls')),
]
