document.addEventListener('DOMContentLoaded', function() {
    const topPage = document.querySelector('.bg-primary');
    const bottomPage = document.querySelector('.bg-secondary');

    // Calculate the height of the bg-primary element
    const topPageHeight = topPage.offsetHeight;

    // Add 90% of the height to the padding of the bg-secondary element
    bottomPage.style.paddingTop = `${topPageHeight * 0.7}px`;
    bottomPage.style.paddingBottom = `${topPageHeight}px`;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        topPage.style.transform = `translate3d(0px, -${scrollY}px, 0px)`;
        bottomPage.style.transform = `translate3d(0px, -${scrollY / 2}px, 0px)`;
    });
});