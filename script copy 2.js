function applyRandomWaveToLetters(element) {
    const letters = element.querySelectorAll('span');
    letters.forEach((letter, index) => {
        const randomDistanceX = (Math.round(Math.random()) * 2 - 1) * 40 - 20;
        const randomDistanceY = (Math.round(Math.random()) * 2 - 1) * 40 - 20;
        letter.style.setProperty('--random-distanceX', `${randomDistanceX}px`);
        letter.style.setProperty('--random-distanceY', `${randomDistanceY}px`);
        letter.style.animation = `moveRandomOnce 2s ${index * 0.2}s forwards`;
        letter.addEventListener('animationend', function() {
            letter.style.animation = '';
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.links');

    elements.forEach(element => {
        // Wrap each letter in a span tag
        element.innerHTML = element.textContent.split('').map(letter => `<span>${letter === ' ' ? '&nbsp;' : letter}</span>`).join('');

        element.addEventListener('mouseover', function() {
            applyRandomWaveToLetters(this);
            const totalAnimationTime = this.querySelectorAll('span').length * 0.2 + 1000;
            this.interval = setInterval(() => applyRandomWaveToLetters(this), totalAnimationTime);
        });

        element.addEventListener('mouseout', function() {
            clearInterval(this.interval);
        });
    });
});

let slideIndex = 0; // The index of the current slide
let currentSlideshow = 'slideshow1'; // The id of the currently active slideshow

// Show the first slide of the first slideshow initially
document.querySelector(`#${currentSlideshow} .slide`).style.display = 'flex';

document.getElementById('prevSlide').addEventListener('click', showPrevSlide);
document.getElementById('nextSlide').addEventListener('click', showNextSlide);

function showPrevSlide() {
    // Get the slides of the current slideshow
    const slides = document.querySelectorAll(`#${currentSlideshow} .slide`);

    // Hide the current slide
    slides[slideIndex].style.display = 'none';

    // Decrement the slide index, wrapping around to the last slide if it goes below 0
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;

    // Show the previous slide
    slides[slideIndex].style.display = 'flex';
}

function showNextSlide() {
    // Get the slides of the current slideshow
    const slides = document.querySelectorAll(`#${currentSlideshow} .slide`);

    // Hide the current slide
    slides[slideIndex].style.display = 'none';

    // Increment the slide index, wrapping around to 0 if it exceeds the number of slides
    slideIndex = (slideIndex + 1) % slides.length;

    // Show the next slide
    slides[slideIndex].style.display = 'flex';
}

function changeSlideshow(slideshow) {
    // Hide the current slideshow
    document.getElementById(currentSlideshow).style.display = 'none';

    // Show the selected slideshow
    document.getElementById(slideshow).style.display = 'flex';

    // Update the current slideshow
    currentSlideshow = slideshow;

    // Reset the slide index
    slideIndex = 0;

    // Show the first slide of the new slideshow
    document.querySelector(`#${currentSlideshow} .slide`).style.display = 'flex';
}