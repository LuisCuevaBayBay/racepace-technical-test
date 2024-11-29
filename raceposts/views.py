from django.shortcuts import render
from rest_framework import generics
from .models import RacePost
from .serializers import RacePostSerializer


class RacePostListCreateView(generics.ListCreateAPIView):
    queryset = RacePost.objects.all()
    serializer_class = RacePostSerializer