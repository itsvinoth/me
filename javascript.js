// ScrollReveal Configuration
const scrollRevealConfig = {
    interval: 16,
    reset: true,
    delay: 300
};

ScrollReveal().reveal('.bot1', scrollRevealConfig);
ScrollReveal().reveal('.hello', scrollRevealConfig);
ScrollReveal().reveal('.im', scrollRevealConfig);
ScrollReveal().reveal('.name', scrollRevealConfig);
ScrollReveal().reveal('.pimage', scrollRevealConfig);
ScrollReveal().reveal('.button', scrollRevealConfig);
ScrollReveal().reveal('.titleani', scrollRevealConfig);
ScrollReveal().reveal('.carousel', scrollRevealConfig);
ScrollReveal().reveal('.aboutme', scrollRevealConfig);
ScrollReveal().reveal('.cpimage', scrollRevealConfig);
ScrollReveal().reveal('.abouttxt', scrollRevealConfig);
ScrollReveal().reveal('.col', scrollRevealConfig);
ScrollReveal().reveal('.map', scrollRevealConfig);
ScrollReveal().reveal('.tcontact', scrollRevealConfig);
ScrollReveal().reveal('.card', scrollRevealConfig);
ScrollReveal().reveal('.mb-3', scrollRevealConfig);
ScrollReveal().reveal('.send', scrollRevealConfig);
ScrollReveal().reveal('.ico', scrollRevealConfig);
ScrollReveal().reveal('.scard', scrollRevealConfig);

// Scroll Reveal on Scroll
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (const element of reveals) {
        const windowheight = window.innerHeight;
        const revealtop = element.getBoundingClientRect().top;
        const revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            element.classList.add('active');
        } else {
            element.classList.add('active');
        }
    }
}

// Title Animation (Vinoth)
const dynamicText = document.querySelector("h1 span");
const words = ["Web Developer", "App Developer", "Designer", "Java Programmer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 800);
    }
}

typeEffect();

// Carousel
let onSlide = false;

window.addEventListener("load", () => {
    autoSlide();

    const dots = document.querySelectorAll(".carousel_dot");
    dots.forEach((dot, index) => dot.addEventListener("click", () => slide(index)));

    const buttonPrev = document.querySelector(".carousel_button__prev");
    const buttonNext = document.querySelector(".carousel_button__next");
    buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
    buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
});

function autoSlide() {
    setInterval(() => {
        slide(getItemActiveIndex() + 1);
    }, 3000);
}

function slide(toIndex) {
    if (onSlide) return;
    onSlide = true;

    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    let newItemActive = null;

    if (toIndex > itemActiveIndex) {
        if (toIndex >= itemsArray.length) {
            toIndex = 0;
        }

        newItemActive = itemsArray[toIndex];
        newItemActive.classList.add("carousel_item__pos_next");
        setTimeout(() => {
            newItemActive.classList.add("carousel_item__next");
            itemActive.classList.add("carousel_item__next");
        }, 20);
    } else {
        if (toIndex < 0) {
            toIndex = itemsArray.length - 1;
        }

        newItemActive = itemsArray[toIndex];
        newItemActive.classList.add("carousel_item__pos_prev");
        setTimeout(() => {
            newItemActive.classList.add("carousel_item__prev");
            itemActive.classList.add("carousel_item__prev");
        }, 20);
    }

    newItemActive.addEventListener("transitionend", () => {
        itemActive.className = "carousel_item";
        newItemActive.className = "carousel_item carousel_item__active";
        onSlide = false;
    }, {
        once: true
    });

    slideIndicator(toIndex);
}

function getItemActiveIndex() {
    const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item__active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
}

function slideIndicator(toIndex) {
    const dots = document.querySelectorAll(".carousel_dot");
    const dotActive = document.querySelector(".carousel_dot__active");
    const newDotActive = dots[toIndex];

    dotActive.classList.remove("carousel_dot__active");
    newDotActive.classList.add("carousel_dot__active");
}

// Input Validation
document.getElementById('sendmsg').addEventListener('click', validateInput);

function validateInput() {
    validateField('NameFormInput', 'NameWarning', 'Enter Name');
    validateField('MailFormInput', 'MailWarning', 'Enter Mail');

    const name = document.getElementById('NameFormInput').value;
    const mail = document.getElementById('MailFormInput').value;

    if (name.length > 0 && mail.length > 0) {
        alert(`From VINOTH: Thank you ${name.toUpperCase()}! I'll contact you later!`);
    }
}

function validateField(inputId, warningId, message) {
    const field = document.getElementById(inputId);
    const fieldLength = field.value.length;
    const warning = document.getElementById(warningId);

    warning.textContent = fieldLength === 0 ? message : '';
}

// Preloader
const preloader = document.getElementById('preloader');
window.addEventListener('load', () => preloader.style.display = 'none');
