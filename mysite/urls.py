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
from django.urls import include, path
from django.views.generic import TemplateView
from django.http import JsonResponse
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


def api_health(request):
    return JsonResponse({"status": "ok", "service": "django"})


def api_index(request):
    return JsonResponse(
        {
            "apis": [
                "/api/health/",
                "/api/home/get_ajax/",
                "/api/about/get_ajax/",
                "/api/contact/",
                "/api/projects/",
                "/api/blogs/",
            ]
        }
    )

schema_view = get_schema_view(
    openapi.Info(
        title="MySite API",
        default_version='v1',
        description="API documentation for the Django services.",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api_index),
    path('api/health/', api_health),
    path('api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('api/redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('api/swagger.json', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('api/home/', include('apps.home.urls')),
    path('api/about/', include('apps.about.urls')),
    path('api/contact/', include('apps.contact.urls')),
    path('api/projects/', include('apps.projects.urls')),
    path('api/blogs/', include('apps.blogs.urls')),
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
