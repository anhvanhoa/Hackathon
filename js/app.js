let btnMenu = document.querySelector('.header-menu i');
let navbar = document.querySelector('.header-navbar');
let closeBtn = document.querySelector('.close i');

btnMenu.addEventListener('click', function () {
    navbar.classList.toggle('active');
});
closeBtn.addEventListener('click', function () {
    navbar.classList.remove('active');
});
window.onscroll = function () {
    navbar.classList.remove('active');
};
