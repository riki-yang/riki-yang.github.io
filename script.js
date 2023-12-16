document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.links');
    const name = document.querySelector('.name');
    const isMobile = isMobileDevice(); // Custom function to check if the device is mobile

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

    function triggerRandomWave() {
        links.forEach(link => {
            applyRandomWave(link);

            setTimeout(() => {
                resetAnimations(link);
            }, 600); // Reset animations after 0.6 seconds
        });

        applyRandomWave(name);

        setTimeout(() => {
            resetAnimations(name);
        }, 600); // Reset animations after 0.6 seconds
    }

    if (isMobile) {
        // Trigger random wave animation every second on mobile devices
        setInterval(triggerRandomWave, 1000);
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

function isMobileDevice() {
    return window.innerWidth <= 768; // Adjust the breakpoint as needed
}

document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.querySelector('.overlay');
    const trailLength = 50; // Number of trail points
    const lineWidth = 10; // Width of the trail lines

    const trailPoints = Array.from({ length: trailLength }, () => ({ x: 0, y: 0 }));
    let currentIndex = 0;

    document.addEventListener('mousemove', function (event) {
        const nextIndex = (currentIndex + 1) % trailLength;
        const currentPoint = trailPoints[currentIndex];
        const nextPoint = trailPoints[nextIndex];

        currentPoint.x = event.pageX;
        currentPoint.y = event.pageY;

        drawTrail();

        currentIndex = nextIndex;
    });

    function drawTrail() {
        const ctx = overlay.getContext('2d');
        ctx.clearRect(0, 0, overlay.width, overlay.height);

        ctx.lineCap = 'round';
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = 'rgba(255, 255, 255, 1)'; // White color

        ctx.beginPath();
        ctx.moveTo(trailPoints[currentIndex].x, trailPoints[currentIndex].y);

        for (let i = 1; i <= trailLength; i++) {
            const index = (currentIndex + i) % trailLength;
            ctx.lineTo(trailPoints[index].x, trailPoints[index].y);
        }

        ctx.stroke();
    }

    // Resize overlay to match the window size
    window.addEventListener('resize', function () {
        overlay.width = window.innerWidth;
        overlay.height = window.innerHeight;
        drawTrail();
    });

    // Initial setup
    overlay.width = window.innerWidth;
    overlay.height = window.innerHeight;
});
