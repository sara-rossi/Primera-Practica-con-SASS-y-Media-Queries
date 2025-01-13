const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const totalSlides = document.querySelectorAll('.slide').length;

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 300; // Desplazamiento de 300px por cada slide
    slides.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});