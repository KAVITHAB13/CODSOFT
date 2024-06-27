const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 90);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

// Ensure that ScrollReveal library is included in your HTML file.
document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.hero-text, .skills-content, .mid-left', { origin: 'left' });
    ScrollReveal().reveal('.hero-img, .mid-right', { origin: 'right' });
    ScrollReveal().reveal('.scroll, .portfolio-btn', { origin: 'bottom' });
    ScrollReveal().reveal('.mid-text' , { origin: 'top' });
    ScrollReveal().reveal('.services -content, .portfolio-content, .contact-content' , { origin: 'right' });
});
