from rest_framework import serializers
from .models import Course, Center, Lead


class CenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Center
        fields = ['id', 'name', 'location']


class CourseSerializer(serializers.ModelSerializer):
    # show readable center data
    centers = CenterSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'duration', 'fee', 'image', 'centers']


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ['id', 'name', 'email', 'course', 'source', 'created_at']