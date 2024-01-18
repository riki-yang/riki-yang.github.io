document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.links');
    const name = document.querySelector('.name');
    const isMobile = isMobileDevice(); // Custom function to check if the device is mobile

    function applyRandomWave(element) {
        const letters = element.querySelectorAll('span');
        letters.forEach((letter, index) => {
            const randomDistanceX = (Math.round(Math.random()) * 2 - 1) * 40 - 20;
            const randomDistanceY = (Math.round(Math.random()) * 2 - 1) * 40 - 20;
            letter.style.setProperty('--random-distanceX', `${randomDistanceX}px`);
            letter.style.setProperty('--random-distanceY', `${randomDistanceY}px`);
            letter.style.animation = `moveRandom 1s ${index * 0.2}s infinite alternate`;
        });
    }

    function applyRandomJumpWave(element) {
        const letters = element.querySelectorAll('span');
        letters.forEach((letter, index) => {
            if (Math.random() <= 0.2) {
                const randomDistanceX = (Math.round(Math.random()) * 2 - 1) * 40 - 20;
                const randomDistanceY = (Math.round(Math.random()) * 2 - 1) * 40 - 20;
                letter.style.setProperty('--random-distanceX', `${randomDistanceX}px`);
                letter.style.setProperty('--random-distanceY', `${randomDistanceY}px`);
                letter.style.animation = `moveRandom 1s ${index * 0.1}s infinite alternate`;
            }
        });
    }

    function resetAnimations(element) {
        const letters = element.querySelectorAll('span');
        letters.forEach(letter => {
            letter.style.animation = '';
        });
    }

    function triggerRandomWave() {
        links.forEach(link => {
            applyRandomJumpWave(link);

            setTimeout(() => {
                resetAnimations(link);
            }, 5000); // Reset animations after 1.5 seconds
        });

        // applyRandomWave(name);

        // setTimeout(() => {
        //     resetAnimations(name);
        // }, 2000); // Rest for 2 seconds
    }

    if (isMobile) {
        // Trigger random wave animation on mobile devices
        setInterval(triggerRandomWave, 3500);
    }

    
    // name.addEventListener('mouseover', function () {
    //     applyRandomWave(name);
    // });

    // name.addEventListener('mouseout', function () {
    //     resetAnimations(name);
    // });

    links.forEach(link => {
        const text = link.textContent;
        link.innerHTML = text
            .split('')
            .map((char, index) => `<span class="char${index + 1}">${char}</span>`)
            .join('');

        link.addEventListener('mouseover', function () {
            applyRandomWave(link);
        });

        link.addEventListener('mouseout', function () {
            resetAnimations(link);
        });
    });
});

function isMobileDevice() {
    return window.innerWidth <= 768; // Adjust the breakpoint as needed
}