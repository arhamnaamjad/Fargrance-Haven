
const carousel = document.querySelector('.carousel');
const prevButton = carousel.querySelector('.carousel-prev');
const nextButton = carousel.querySelector('.carousel-next');
let currentIndex = 0;

function showSlide(index) {
    const items = carousel.querySelectorAll('.carousel-item');
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }
    items.forEach((item, i) => {
        item.style.display = i === currentIndex ? 'block' : 'none';
    });
}

prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

showSlide(currentIndex);
