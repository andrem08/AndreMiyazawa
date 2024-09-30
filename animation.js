document.addEventListener('DOMContentLoaded', function() {
    const topPage = document.querySelector('.bg-primary');
    const bottomPage = document.querySelector('.bg-secondary');

    function updatePadding() {
        const topPageHeight = topPage.offsetHeight;
        bottomPage.style.paddingTop = `${topPageHeight * 0.75}px`;
    }

    // Initial padding update
    updatePadding();

    // Update padding on window resize to handle mobile orientation changes
    window.addEventListener('resize', updatePadding);

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        topPage.style.transform = `translate3d(0px, -${scrollY}px, 0px)`;
        bottomPage.style.transform = `translate3d(0px, -${scrollY / 1.5}px, 0px)`;
    });
});