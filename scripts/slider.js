document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');

    let isClickingSlide = false;

    // Add event listeners to the slides
    slides.forEach(slide => {
        slide.addEventListener('mousedown', function() {
            isClickingSlide = true;
        });
        slide.addEventListener('mouseup', function() {
            isClickingSlide = false;
        });
    });

    // Rest of your code...
});

function handleScroll(e) {
    // If the user is trying to scroll to the left, the scroll position is at the start of the page, and the user is not currently clicking a slide
    if (e.deltaX < 1 && slider.scrollLeft <= 0 && !isClickingSlide) {
        e.preventDefault(); // Prevent the default action
    }
}

// Function to handle keydown events
function handleKeydown(e) {
    const slider = document.querySelector('.slider');
    if (e.keyCode === 37) { // left arrow key
        slider.scrollLeft -= 100;
    } else if (e.keyCode === 39) { // right arrow key
        slider.scrollLeft += 100;
    }
}

// Function for smooth scrolling
function smoothScroll(element, target, duration) {
    const start = element.scrollLeft;
    const change = target - start;
    console.log("change:", change);
    let startTime = null;

    function animateScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        element.scrollLeft = start + change * progress;
        console.log("element.scrollleft:", element.scrollLeft);
        if (progress < 1) requestAnimationFrame(animateScroll);
    }

    requestAnimationFrame(animateScroll);
}

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slide');

    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            // Calculate the scroll position needed to center the slide
            console.log("clicked");
            const target = this.offsetLeft - (slider.offsetWidth / 2) + (this.offsetWidth / 2);
            console.log("target:", target);

            // Smoothly scroll the slider to the calculated position
            smoothScroll(slider, target, 1000); // 1000ms = 1s
        });
    });
});

// Event listeners
window.addEventListener('touchmove', handleScroll, { passive: false });
window.addEventListener('keydown', handleKeydown);