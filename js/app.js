let btnMenu = document.querySelector('.header-menu i');
let navbar = document.querySelector('.header-navbar');
let closeBtn = document.querySelector('.close i');
let controlBackToTop = document.querySelector('.control-back-to-top');
let header = document.querySelector('.header');

navbar.classList.remove('active');

btnMenu.addEventListener('click', function () {
    navbar.classList.toggle('active');
});
closeBtn.addEventListener('click', function () {
    navbar.classList.remove('active');
});
window.onscroll = function () {
    navbar.classList.remove('active');
    if (window.scrollY > 1000) {
        controlBackToTop.classList.add('show');
    } else {
        controlBackToTop.classList.remove('show');
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
