let currentSlide = 0;  // Start with the first slide
let lightboxVisible = false;  // Start with the lightbox hidden

// Function to handle keydown events
function handleKeydown(e) {
    const slider = document.querySelector('.slider');
    const slides = slider.getElementsByClassName('slide');
    const lightbox = document.getElementById('lightbox');
    let middlePosition = 0;
    let scrollDistance = 0;

    if (e.keyCode === 13) { // Enter key
        if (lightboxVisible) {
            lightbox.style.display = 'none';
            lightboxVisible = false;
        } else {
            lightbox.style.display = 'block';
            lightbox.style.backgroundImage = `url(${slides[currentSlide].src})`;
            lightboxVisible = true;
        }
        return;
    } else if (e.keyCode === 27) { // Escape key
        if (lightboxVisible) {
            lightbox.style.display = 'none';
            lightboxVisible = false;
        }
        return;
    }

    e.preventDefault();  // Prevent the default behavior

    // Remove the 'enlarged' class from the current slide
    slides[currentSlide].classList.remove('enlarged');

    if (e.keyCode === 37) { // left arrow key
        currentSlide = Math.max(currentSlide - 1, 0);  // Don't go below 0
    } else if (e.keyCode === 39) { // right arrow key
        currentSlide = (currentSlide + 1) % slides.length;  // Loop back to the first image
    }

    // Add the 'enlarged' class to the new current slide
    slides[currentSlide].classList.add('enlarged');

    // Change the lightbox image
    lightbox.style.backgroundImage = `url(${slides[currentSlide].src})`;

    // Get the middle position of the current slide
    middlePosition = slides[currentSlide].getBoundingClientRect().left + slides[currentSlide].getBoundingClientRect().width / 2;
    scrollDistance = middlePosition - window.innerWidth / 2;

    // Smoothly scroll to the middle position
    window.scrollBy({
        left: scrollDistance,
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('imageSlider');
    const slides = slider.getElementsByClassName('slide');
    const lightbox = document.getElementById('lightbox');
    let middlePosition = 0;
    let scrollDistance = 0;

    // Event listener for image click
    for (let i = 0; i < slides.length; i++) {
        slides[i].addEventListener('click', function (event) {
            // Show the lightbox
            lightbox.style.display = 'block';
            lightbox.style.backgroundImage = `url(${event.target.src})`;

            // Update currentSlide
            currentSlide = Array.from(slides).indexOf(event.target);

            // Get the middle position of the clicked image
            middlePosition = event.target.getBoundingClientRect().left + event.target.getBoundingClientRect().width / 2;
            scrollDistance = middlePosition - window.innerWidth / 2;

            console.log("click scroll", scrollDistance);

            // Smoothly scroll to the middle position
            window.scrollBy({
                left: scrollDistance,
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Event listener for lightbox click
    lightbox.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });
});

// Event listeners
window.addEventListener('keydown', handleKeydown);