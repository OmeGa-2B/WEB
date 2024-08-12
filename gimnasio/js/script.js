let currentIndex = 0;
const slides = document.querySelectorAll('.carrusel-item');
const totalSlides = slides.length;
const carruselInner =document.querySelector('.carrusel-inner');

//clonacion de slides
const firstSlide = slides[0];
const lastSlide = slides[slides.length -1];
const firstSlideClone = firstSlide.cloneNode(true);
const lastSlideClone = lastSlide.cloneNode(true);

carruselInner.appendChild(firstSlideClone);
carruselInner.insertBefore(lastSlideClone,firstSlide);

function showSlide(index) {
    carruselInner.style.transition = 'transform 0.75s ease-in-out';
    currentIndex = index;
    carruselInner.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

    if (currentIndex === totalSlides) {
        setTimeout(() => {
            carruselInner.style.transition = 'none';
            currentIndex = 0;
            carruselInner.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
        }, 500);
    } else if (currentIndex === -1) {
        setTimeout(() => {
            carruselInner.style.transition = 'none';
            currentIndex = totalSlides - 1;
            carruselInner.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    carruselInner.style.transform = 'translateX(-100%)';
});


function nextSlide(){
    showSlide(currentIndex+1);
}

function prevSlide(){
    showSlide(currentIndex-1)
}

const autoSlide = setInterval(nextSlide,7000);

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