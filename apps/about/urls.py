from django.urls import path

from . import views

urlpatterns = [
    path('', views.about, name='about'),
    path('get_ajax/', views.get_data, name="get_ajax"),
]