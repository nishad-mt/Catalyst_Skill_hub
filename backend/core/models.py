from django.db import models

from django.db import models

class Center(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    duration = models.CharField(max_length=100)
    fee = models.IntegerField()
    image = models.ImageField(upload_to='courses/')

    centers = models.ManyToManyField(Center, related_name='courses')

    def __str__(self):
        return self.title

class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
