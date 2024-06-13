// Select the next, previous, and slide container elements
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');

// Function to transition to the next slide
function nextSlide() {
    // Select all slide items
    let items = document.querySelectorAll('.item');
    // Move the first slide item to the end of the slide container
    slide.appendChild(items[0]);
}

// Function to transition to the previous slide
function prevSlide() {
    // Select all slide items
    let items = document.querySelectorAll('.item');
    // Move the last slide item to the beginning of the slide container
    slide.prepend(items[items.length - 1]);
}

// Add click event listeners to the next and previous buttons
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Automatically transition to the next slide every 3 seconds
setInterval(nextSlide, 3000); // Change slide every 3 seconds