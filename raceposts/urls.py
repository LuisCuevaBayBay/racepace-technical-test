from django.urls import path, include
from .views import RacePostViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'raceposts', RacePostViewSet, basename='racepost')  # Using DefaultRouter for ModelViewSet

urlpatterns = [
    path('api/', include(router.urls)),  # This will include the URL for /api/raceposts/
]

urlpatterns = [
    path('api/', include(router.urls)),  # This will include the URL for /api/raceposts/
]