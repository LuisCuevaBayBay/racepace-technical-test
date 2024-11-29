from django.urls import path, include
from .views import RacePostListCreateView

urlpatterns = [
    path('api/raceposts/', RacePostListCreateView.as_view(), name='racepost-list-create'),
]