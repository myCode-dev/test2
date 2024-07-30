function JumpTo(id) {
    var jumpto = document.getElementById(id);
    jumpto.scrollIntoView({ block: 'start' , behavior: 'smooth' });
}

function reveal() {
    var reveals = document.querySelectorAll(".celebrate-section,#lookforward,.countdown-area-box>div,.video-area,.dress-code>p,.color-box,.timeline,.map,.traffic-guide,.invite-content,.invite-pic,.intro-content,.pic,.time,.celebrate-section p,.celebrate-section h2,.schedule h2,.schedule-box,.dresscode-box");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            if (!reveals[i].classList.contains("active")) {
                reveals[i].classList.add("active");
            }
        } else {
            if (reveals[i].classList.contains("active")) {
                reveals[i].classList.remove("active");
            }
        }
    }
}
window.addEventListener("scroll", reveal);


function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        let context = this, args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

window.addEventListener("scroll", debounce(reveal));




function showgallery(id){
    document.getElementById(id).style.display = "flex";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("closebutton").style.display = "block";
}

function closegallery(){
    document.getElementById("gallery").style.display = "none";
    document.getElementById("closebutton").style.display = "none";
    document.getElementById("photo-gallery").style.display = "none";
}

var TheDay = new Date("Oct 26, 2024 12:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = TheDay - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
}, 1000);


function showRSVP() {
    window.location = 'https://www.surveycake.com/s/08bAO';
};