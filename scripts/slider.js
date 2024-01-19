// Function to handle keydown events
function handleKeydown(e) {
    const slider = document.querySelector('.slider');
    if (e.keyCode === 37) { // left arrow key
        slider.scrollLeft -= 100;
    } else if (e.keyCode === 39) { // right arrow key
        slider.scrollLeft += 100;
    }
}

// Event listeners
window.addEventListener('keydown', handleKeydown);