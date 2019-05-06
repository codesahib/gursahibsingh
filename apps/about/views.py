from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt

def about(request):
    return render(request, 'about-page/about.html')

@csrf_exempt
def get_data(request):
	file=request.POST.get('filename')
	file='apps/about/modelData/'+file
	data = open(file,'r').read()
	
	return JsonResponse(data,safe=False)

