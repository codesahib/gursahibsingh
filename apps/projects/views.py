from django.shortcuts import render
from django.http import HttpResponse

def project_ml(request):
    return render(request, 'projects-page/projects-ml.html')

def project_web(request):
    return render(request, 'projects-page/projects-web.html')

def project_android(request):
    return render(request, 'projects-page/projects-android.html')

def project_dbms(request):
    return render(request, 'projects-page/projects-dbms.html')    