from django.urls import path
from .views import (
    CenterListView,
    CourseListView,
    CourseDetailView,
    LeadCreateView,
    ContactInfoView
)

urlpatterns = [
    path('centers/', CenterListView.as_view()),
    path('courses/', CourseListView.as_view()),
    path('courses/<int:pk>/', CourseDetailView.as_view()),
    path('leads/', LeadCreateView.as_view()),
    path('contact-info/', ContactInfoView.as_view()),
]