from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('get_ajax/', views.get_data, name='get_ajax1'),
]