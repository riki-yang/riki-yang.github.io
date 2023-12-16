document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.links');
    const name = document.querySelector('.name');

    function applyRandomWave(element) {
        const letters = element.querySelectorAll('span');
        letters.forEach((letter, index) => {
            const randomDistance = Math.random() * 40 - 20; // Adjust the range as needed
            letter.style.setProperty('--random-distance', `${randomDistance}px`);
            letter.style.animation = `wave 0.6s infinite alternate ${index * 0.1}s, moveRandom 1s ${Math.random()}s infinite alternate`;
        });
    }

    function resetAnimations(element) {
        const letters = element.querySelectorAll('span');
        letters.forEach(letter => {
            letter.style.animation = '';
        });
    }

    name.addEventListener('mouseover', function () {
        applyRandomWave(name);
    });

    name.addEventListener('mouseout', function () {
        resetAnimations(name);
    });

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
