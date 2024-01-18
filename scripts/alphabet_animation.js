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

        applyRandomWaveToLetters(element);
    });
});