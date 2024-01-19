function handleScroll(e) {
    // If the user is trying to scroll to the left and the scroll position is at the start of the page
    if (e.deltaX < 1 && slider.scrollLeft <= 0) {
        console.log(1)
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