// Function to handle keydown events
function handleKeydown(e) {
    const slider = document.querySelector('.slider');
    if (e.keyCode === 37) { // left arrow key
        slider.scrollLeft -= 100;
    } else if (e.keyCode === 39) { // right arrow key
        slider.scrollLeft += 100;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('imageSlider');
    const slides = slider.getElementsByClassName('slide');
    let middlePosition = 0;
    let scrollDistance = 0;

    // Event listener for image click
    //loop through all slides and add event listener
    for (let i = 0; i < slides.length; i++) {
        slides[i].addEventListener('click', function (event) {
            // Get the middle position of the clicked image
            console.log(event.target.getBoundingClientRect());
            middlePosition = event.target.getBoundingClientRect().left + event.target.getBoundingClientRect().width / 2;
            console.log("middlePosition:", middlePosition);
            console.log("window.innerWidth / 2:", window.innerWidth / 2);
            scrollDistance = middlePosition - window.innerWidth / 2;
            console.log("scrollDistance:", scrollDistance);

            // Smoothly scroll to the middle position
            window.scrollBy({
                left: scrollDistance,
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});

// Event listeners
window.addEventListener('keydown', handleKeydown);