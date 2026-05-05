from rest_framework import serializers
from .models import Center, CenterPhone, Course, Lead, ContactInfo


class CenterPhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = CenterPhone
        fields = ['id', 'phone_number']


class CenterSerializer(serializers.ModelSerializer):
    phones = CenterPhoneSerializer(many=True, read_only=True)

    class Meta:
        model = Center
        fields = ['id', 'name', 'location', 'phones']


class CourseSerializer(serializers.ModelSerializer):
    centers = CenterSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'duration', 'fee', 'image', 'centers']


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ['id', 'name', 'email', 'course', 'source', 'created_at']
        read_only_fields = ['created_at']


class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = ['id', 'phone', 'email']