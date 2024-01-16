// alphabet move animations

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

// slider nav
window.onwheel = function(e) {
    e.preventDefault();
    const slider = document.querySelector('.slider');
    slider.scrollLeft -= e.deltaY;
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
};

// smooth scroll
document.addEventListener('wheel', function(e) {
    e.preventDefault();
    const slider = document.querySelector('.slider');
    const amount = e.deltaY;
    const currentScroll = slider.scrollLeft;
    const newScroll = currentScroll - amount;
    smoothScroll(slider, newScroll, 600); // 600 is the duration of the animation in milliseconds
});

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


document.addEventListener('wheel', function(e) {
    e.preventDefault();
    const slider = document.querySelector('.slider');
    const amount = e.deltaY;
    const currentScroll = slider.scrollLeft;
    const newScroll = currentScroll - amount;
    smoothScroll(slider, newScroll, 600); // 600 is the duration of the animation in milliseconds

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
});