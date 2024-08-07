let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carrusel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carrusel-inner').style.transform = `translateX(${offset}%)`;
}


document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);



function initMap(){
    const map = L.map('map').setView([19.42847,-99.12766],13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([19.42847,-99.12766]).addTo(map)
        .bindPopup('Ubicacion del gimnasio')
        .openPopup();
}

document.addEventListener('DOMContentLoaded',initMap);

function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}