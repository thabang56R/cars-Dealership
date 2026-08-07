from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from .models import Dealer, Review

def get_all_dealers(request):
    dealers = list(Dealer.objects.values())
    return JsonResponse(dealers, safe=False)

def get_dealer_by_id(request, dealer_id):
    dealer = Dealer.objects.filter(id=dealer_id).values().first()
    return JsonResponse(dealer, safe=False)

def get_dealers_by_state(request, state):
    dealers = list(Dealer.objects.filter(state=state).values())
    return JsonResponse(dealers, safe=False)

def get_dealer_reviews(request, dealer_id):
    reviews = list(Review.objects.filter(dealer_id=dealer_id).values())
    return JsonResponse(reviews, safe=False)

def login_user(request):
    username = request.POST.get("username")
    password = request.POST.get("password")
    user = authenticate(username=username, password=password)
    if user:
        login(request, user)
        return JsonResponse({"status": "logged in"})
    return JsonResponse({"status": "failed"})

def logout_user(request):
    logout(request)
    return JsonResponse({"status": "logged out"})
