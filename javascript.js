// console.log(document.getElementById('NameFormInput').value);
// console.log(document);
// alert(document.getElementById('NameFormInput').value)

//scrollreveal--------------------------------------------------------------------------->
// ScrollReveal().reveal('.bot1', { delay: 200 });
// ScrollReveal().reveal('.bot2', { delay: 200 });
// ScrollReveal().reveal('.bot3', { delay: 200 });

ScrollReveal().reveal('.bot1',{
	interval: 16,
	reset: true,
    delay: 300
});
ScrollReveal().reveal('.hello',{
	interval: 16,
	reset: true,
    delay: 400
});ScrollReveal().reveal('.im',{
	interval: 16,
	reset: true,
    delay: 400
});
ScrollReveal().reveal('.name',{
	interval: 16,
	reset: true,
    delay: 500
});
ScrollReveal().reveal('.pimage',{
	interval: 16,
	reset: true,
    delay: 600
});
ScrollReveal().reveal('.button',{
	interval: 16,
	reset: true,
    delay: 500
});
ScrollReveal().reveal('.titleani',{
	interval: 16,
	reset: true,
    delay: 500
});
ScrollReveal().reveal('.carousel',{
	interval: 16,
	reset: true,
    delay: 500
});
ScrollReveal().reveal('.aboutme',{
	interval: 16,
	reset: true,
    delay: 300
});
ScrollReveal().reveal('.cpimage',{
	interval: 16,
	reset: true,
    delay: 500
});
ScrollReveal().reveal('.abouttxt',{
	interval: 16,
	reset: true,
    delay: 600
});
ScrollReveal().reveal('.col',{
	interval: 16,
	reset: true,
    delay: 800
});
ScrollReveal().reveal('.map',{
	interval: 16,
	reset: true,
    delay: 700
});
ScrollReveal().reveal('.tcontact',{
	interval: 16,
	reset: true,
    delay: 500
});
ScrollReveal().reveal('.card',{
	interval: 16,
	reset: true,
    delay: 500
});
ScrollReveal().reveal('.mb-3',{
	interval: 16,
	reset: true,
    delay: 500
});
ScrollReveal().reveal('.send',{
	interval: 16,
	reset: true,
    delay: 500
});
ScrollReveal().reveal('.ico',{
	interval: 16,
	reset: true,
    delay: 500
});
ScrollReveal().reveal('.scard',{
	interval: 16,
	reset: true,
    delay: 500
});





window.addEventListener('scroll',reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0;i< reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.add('active');
        }
    }
}

//title animation (vinoth)----------------------------------------------------------------->

const dynamicText = document.querySelector("h1 span");
const words = ["Web Developer", "App Developer", "Designer", "Java Programmer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
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

//carousel---------------------------------------------------------------------------------->

let onSlide = false;

window.addEventListener("load", () => {
   autoSlide();

   const dots = document.querySelectorAll(".carousel_dot");
   for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", () => slide(i));
   }

   const buttonPrev = document.querySelector(".carousel_button__prev");
   const buttonNext = document.querySelector(".carousel_button__next");
   buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
   buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
})

function autoSlide() {
   setInterval(() => {
      slide(getItemActiveIndex() + 1);
   }, 3000);
}

function slide(toIndex) {
   if (onSlide)
      return;
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


//input validation------------------------------------------------------------------------->

document.getElementById('sendmsg').addEventListener('click',()=>{
    const Name = document.getElementById('NameFormInput').value
    const Namelength = Name.length;
    const NameUpper = Name.toUpperCase();
    if (Namelength==0) {
        document.getElementById('NameWarning').textContent=' Enter Name ';
    }
    else{
        document.getElementById('NameWarning').textContent=' ';
    }
})

document.getElementById('sendmsg').addEventListener('click',()=>{
    const Mail = document.getElementById('MailFormInput').value
    const Maillength = Mail.length;
    if (Maillength==0) {
        document.getElementById('MailWarning').textContent=' Enter Mail ';
    }
    else{
        document.getElementById('MailWarning').textContent=' ';
    }
})

document.getElementById('sendmsg').addEventListener('click',()=>{
    const Name = document.getElementById('NameFormInput').value
    const Namelength = Name.length;
    const NameUpper = Name.toUpperCase();
    const Mail = document.getElementById('MailFormInput').value
    const Maillength = Mail.length;

    if(Namelength>0 && Maillength>0){
        alert('From VINOTH : Thank you '+ NameUpper +' ! ' + " I'll contact you later !")
    }
})

//preloader-------------------------------------------------------------------------------------->

const load = document.getElementById('preloader')
window.addEventListener('load',()=>{
    load.style.display='none';
})

