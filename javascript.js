// ScrollReveal Configuration

AOS.init();


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
let currentSlide = 0;

    function showSlide(index) {
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        const translateValue = -currentSlide * 100 + '%';
        slider.style.transform = `translateX(${translateValue})`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    setInterval(nextSlide, 3000); 

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
const loader = document.getElementById('preloader');
window.addEventListener('load', function(){ 
    loader.style.display = 'none';
})

