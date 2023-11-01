document.addEventListener('DOMContentLoaded', (event) => {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const angleStep = 360 / images.length;
    
    images.forEach((img, index) => {
        const angle = angleStep * index;
        img.style.transform = `rotateY(${angle}deg) translateZ(1100px)`;
    });
    
});
