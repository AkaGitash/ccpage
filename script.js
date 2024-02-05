document.addEventListener('DOMContentLoaded', function () {
    // Opening animation
    const openingAnimation = document.getElementById('opening-animation');
    const mainContent = document.getElementById('main-content');

    setTimeout(function () {
        openingAnimation.style.opacity = '0';
        openingAnimation.style.transition = 'opacity 1s ease-in-out';

        setTimeout(function () {
            openingAnimation.classList.add('hidden');
            mainContent.classList.remove('hidden');
        }, 1000);
    }, 3000);
});
