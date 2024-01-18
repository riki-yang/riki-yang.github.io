// Get the slider element
const slider = document.querySelector('.slider');

// Add event listener for scroll event
window.addEventListener('wheel', handleScroll, { passive: false });

// Function to handle scrolling
function handleScroll(e) {
    console.log('handleScroll function called');
    e.preventDefault();
    console.log(e);

    const oldScrollLeft = slider.scrollLeft;
    console.log('oldScrollLeft:', oldScrollLeft);

    // Adjust the scrollLeft property based on deltaY
    // Multiply by a constant to increase scroll amount
    slider.scrollLeft += (e.deltaX + e.deltaY) * 10;

    const newScrollLeft = slider.scrollLeft;
    console.log('newScrollLeft:', newScrollLeft);

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
window.addEventListener('touchmove', handleScroll, { passive: false });
window.addEventListener('keydown', handleKeydown);
slider.addEventListener('wheel', handleScroll);