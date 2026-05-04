from django.contrib import admin
from .models import Course, Center,CenterPhone,ContactInfo

admin.site.register(Course)
admin.site.register(Center)
admin.site.register(CenterPhone)
admin.site.register(ContactInfo)