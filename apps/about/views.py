from django.shortcuts import render
from django.http import HttpResponse

<<<<<<< HEAD:apps/about/views.py
def about(request):
    return render(request, 'about-page/about.html')
=======

def index(request):
    return render(request, 'home-page/home-page.html')
>>>>>>> 20a50cd5d6db642767dace90f2f28dab1cbb5220:home/views.py
