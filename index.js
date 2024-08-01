// Scroll to the specified element
function JumpTo(id) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

// Open Google Maps with specified address
function openGoogleMap() {
  window.open('https://www.google.com/maps/place/台北市士林區凱旋路49號', '_blank');
}

// Toggle image display
function changeImage() {
  const pic1 = document.getElementById("invite-pic1-2");
  const pic2 = document.getElementById("invite-pic2-2");

  if (pic1 && pic2) {
    pic1.style.display = pic1.style.display === "none" ? "block" : "none";
    pic2.style.display = pic2.style.display === "none" ? "block" : "none";
  }
}

// Wedding countdown timer
function startCountdown(targetDate) {
  const endDate = new Date(targetDate).getTime();

  const intervalId = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
      clearInterval(intervalId);
      document.getElementById("countdown-area").innerHTML = "<h2>婚禮倒數</h2><br>IT'S TIME TO CELEBRATE !";
      document.getElementById("countdown").innerHTML = "LET'S CELEBRATE !";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;
  }, 1000);
}

// Open RSVP link
function showRSVP() {
  window.open('https://www.surveycake.com/s/08bAO', '_blank');
}

// Throttle function
function throttle(fn, wait) {
  let lastTime = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastTime >= wait) {
      lastTime = now;
      return fn(...args);
    }
  };
}

// Reveal elements on scroll
function reveal() {
  const reveals = document.querySelectorAll("#lookforward,.countdown-area-box>div,.timeline,.traffic,.traffic-content,.traffic-guide,.invite-content,.invite-pic,.intro-content,.celebrate-section p,.celebrate-section h2");

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

// Initialize animations and event listeners
function initialize() {
  const textElement = document.querySelector('.celebrate-text');

  if (textElement) {
    // Remove animation, trigger reflow
    textElement.style.animation = 'none';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        textElement.style.animation = 'typing 4s steps(30, end) forwards, blink-caret .75s step-end infinite';
      });
    });
  }

  window.addEventListener("scroll", throttle(reveal, 200));

  // Periodically change images
  setInterval(changeImage, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  initialize();
  startCountdown("Oct 26, 2024 12:00:00");
});
