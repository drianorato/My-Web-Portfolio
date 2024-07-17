// =========== show menubar =========== //
const navMenu = document.getElementById('nav__menu');
const navToggle = document.getElementById('nav_menu');
const navClose = document.getElementById('nav__close');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show_menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show_menu');
    })
}

// =========== Auto remove mobile menubar =========== //

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav__menu');
    navMenu.classList.remove('show_menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// =========== Blur Header =========== //

const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur__header')
                       : header.classList.remove('blur__header')
} 

window.addEventListener('scroll', scrollHeader)