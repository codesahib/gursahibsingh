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

urlpatterns = [
<<<<<<< HEAD
    url(r'', include('apps.home.urls')),
	url(r'^home/', include('apps.home.urls')),
	url(r'^contact/', include('apps.contact.urls')),
    url(r'^about/', include('apps.about.urls')),
    url(r'^projects/', include('apps.projects.urls')),
=======
	url(r'^home/', include('home.urls')),
>>>>>>> 20a50cd5d6db642767dace90f2f28dab1cbb5220
    url(r'^admin/', admin.site.urls),
]
