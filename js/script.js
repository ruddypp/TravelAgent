document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navUL = document.querySelector('.ul-nav');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navUL.classList.toggle('show');
    });
});






