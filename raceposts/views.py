from rest_framework import viewsets
from .models import RacePost
from .serializers import RacePostSerializer

class RacePostViewSet(viewsets.ModelViewSet):
    queryset = RacePost.objects.all()
    serializer_class = RacePostSerializer
