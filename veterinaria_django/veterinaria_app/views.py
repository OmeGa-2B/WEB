from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name = "veterinaria_app/index.html"

class ServiciosView(TemplateView):
    template_name = "veterinaria_app/servicios.html"

class CitasView(TemplateView):
    template_name = "veterinaria_app/citas.html"

class AdopcionesView(TemplateView):
    template_name = "veterinaria_app/adopciones.html"

class AnimalesEView(TemplateView):
    template_name = "veterinaria_app/animales_e.html"

class nosotrosView(TemplateView):
    template_name = "veterinaria_app/nosotros.html"

class blogView(TemplateView):
    template_name = "veterinaria_app/blog.html"