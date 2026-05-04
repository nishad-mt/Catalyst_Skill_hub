from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, CenterViewSet, LeadViewSet

router = DefaultRouter()
router.register('courses', CourseViewSet)
router.register('centers', CenterViewSet)
router.register('leads', LeadViewSet)

urlpatterns = [
    path('', include(router.urls)),
]