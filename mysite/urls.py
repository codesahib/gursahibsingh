"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import include,url
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',TemplateView.as_view(template_name="index.html")),
    path('home/',TemplateView.as_view(template_name="index.html")),
    path('about/',TemplateView.as_view(template_name="index.html")),
    path('projects/',TemplateView.as_view(template_name="index.html")),
    path('blogs/',TemplateView.as_view(template_name="index.html")),
    path('blogs/<str:name>',TemplateView.as_view(template_name="index.html"))
    # url(r'', include('apps.home.urls')),
	# url(r'^home/', include('apps.home.urls')),
	# url(r'^contact/', include('apps.contact.urls')),
    # url(r'^about/', include('apps.about.urls')),
    # url(r'^projects/', include('apps.projects.urls')),
    # url(r'^blogs/', include('apps.blogs.urls')),
]
