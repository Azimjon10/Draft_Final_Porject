from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from core.views import profiles
from core.views import attendance_html_view
from core.views import add_profile
from core.views import present_view
from core.views import index_view


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('core.urls')),
        path('profile.html', profiles, name='profile_html'),
    path('attendance.html', attendance_html_view, name='attendance_html'),
    path('add_profile.html', add_profile, name='add_profile_html'),  
    path('present.html', present_view, name='present_html'), 
    path('index.html', index_view, name='index_html'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
