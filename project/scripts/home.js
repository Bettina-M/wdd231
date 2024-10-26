let today = new Date();
let time = today.toLocaleString();
document.querySelector("#date").innerHTML = `Last modified ${time}`;

//homepage slideshow div//
document.addEventListener("DOMContentLoaded", function() {
    const slideshow = document.querySelector(".slideshow");
    const slides = Array.from(slideshow.children);
    
    let currentIndex = 0;
    
    const slideDuration = 3000; 
    
    function moveSlides() {
        currentIndex = (currentIndex + 1) % slides.length; // Loop through slides
        slideshow.style.transform = `translateX(-${currentIndex * 400}px)`; // Move to the next slide
    }
    
    setInterval(moveSlides, slideDuration);
});

const navButton = document.querySelector("#navButton");
const nav = document.querySelector("nav");

navButton.addEventListener('click',()=>{
    nav.classList.toggle("open");
    navButton.classList.toggle("open");
});