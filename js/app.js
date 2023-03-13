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

// Back to top
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

// Active navbar item on the first loadding
window.addEventListener('load', activeMenu);

// Logo click
const logo = document.querySelector('.header-logo');
logo.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

// Scroll spy
const items = document.querySelectorAll('.header-item');
items.forEach((ele) => {
    ele.addEventListener('click', () => {
        items.forEach((ele) => {
            ele.style.setProperty('--background-beforeElement', '0');
        });
        ele.style.setProperty('--background-beforeElement', '100%');
    });
});

const highValueProduct = document.getElementById('moveProduct');
const partner = document.getElementById('movePartner');
const review = document.getElementById('moveReview');
const benefits = document.getElementById('moveBenefits');
const contact = document.getElementById('moveContact');
const partOfWeb = [highValueProduct, partner, review, benefits, contact];

function activeMenu() {
    partOfWeb.forEach((ele, index) => {
        if (
            window.scrollY + header.offsetHeight >= ele.offsetTop &&
            window.scrollY + header.offsetHeight <= ele.offsetTop + ele.offsetHeight
        ) {
            items[index].style.setProperty('--background-beforeElement', '100%');
        } else {
            items[index].style.setProperty('--background-beforeElement', '0');
        }
    });
}
window.addEventListener('scroll', activeMenu);
