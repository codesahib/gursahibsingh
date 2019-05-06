from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt
import json
import os


def home(request):
    return render(request, 'home-page/home-page.html')

@csrf_exempt
def get_data(request):
	cwd=os.getcwd()   #F://Projects/Website/mysite
	file=request.POST.get('filename')
	file='apps/home/modelData/'+file
	data = open(file,'r').read()
	
	return JsonResponse(data,safe=False)
