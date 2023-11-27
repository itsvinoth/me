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
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
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
