// Function to handle scrolling
function handleScroll(e) {
    e.preventDefault();
    const slider = document.querySelector('.slider');
    let delta = e.deltaY;

    // Check if the event was triggered by a device that scrolls in pixels
    if (e.deltaMode === 0) {
        // For pixel-based scrolling, use deltaX instead of deltaY
        delta = e.deltaX;
    }

    slider.scrollLeft += delta;
    smoothScroll(slider, slider.scrollLeft, 600);

    // Add fade-in effect
    const images = slider.querySelectorAll('img');
    images.forEach(img => {
        const imgLeft = img.getBoundingClientRect().left;
        const imgRight = img.getBoundingClientRect().right;
        if (imgLeft < window.innerWidth && imgRight > 0) {
            img.classList.add('fade-in');
        } else {
            img.classList.remove('fade-in');
        }
    });
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
    let startTime = null;

    function animateScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        element.scrollLeft = start + change * progress;
        if (progress < 1) requestAnimationFrame(animateScroll);
    }

    requestAnimationFrame(animateScroll);
}

// Event listeners
window.addEventListener('wheel', handleScroll, { passive: false });
window.addEventListener('touchmove', handleScroll, { passive: false });
window.addEventListener('keydown', handleKeydown);