function JumpTo(id) {
    var jumpto = document.getElementById(id);
    jumpto.scrollIntoView({ block: 'start' , behavior: 'smooth' });
}

//
function reveal(){
    var reveals = document.querySelectorAll("#lookforward,.countdown-area-box>div,.video-area,.dresscode-box,.color-box,.traffic,.traffic-content,.timeline,.map,.traffic-guide,.invite-content,.invite-pic,.intro-content,.pic,.celebrate-section p,.celebrate-section h2")
    for (var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll",reveal)

document.addEventListener('DOMContentLoaded', () => {
    const celebrateText = document.querySelector('.celebrate-text');
    celebrateText.addEventListener('animationend', (event) => {
        if (event.animationName === 'typing') {
            setTimeout(() => {
                // var reveals = document.querySelectorAll(".intro, .invite, .traffic, .schedule, #dresscode, .photo-video, .countdown-area, footer")
                // reveals.forEach(reveal => {
                //     reveal.style.display = 'block';
                // })
                window.scrollTo({
                    top: window.innerHeight, // 滾動到下一個視窗高度
                    behavior: 'smooth' // 平滑滾動
                });
            }, 1500); // 等待 3000 毫秒 (3 秒)
        }
    });
});

function openGoogleMap() {
    window.open('https://www.google.com/maps/place/台北市士林區凱旋路49號', '_blank', 'width=800,height=600');
}


setInterval(changeImg, 1000);
 
function changeImg() {
  let Pic1 = document.getElementById("invite-pic1-2"),
  Pic2 = document.getElementById("invite-pic2-2");
  Pic1.style.display = Pic1.style.display == "none" ? "block" : "none";
  Pic2.style.display = Pic2.style.display == "none" ? "block" : "none";
}


function showgallery(id){
    document.getElementById(id).style.display = "flex";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("closebutton").style.display = "block";

    if ( document.getElementById('video').style.display == "flex" ) {
        let musicoffline = document.getElementById('music-off-line'),
        themusic = document.querySelector("audio");
        
        themusic.pause();
        musicoffline.classList.remove("playmusic");
    };
}

function closegallery(){
    document.getElementById("gallery").style.display = "none";
    document.getElementById("closebutton").style.display = "none";
    document.getElementById("photo-gallery").style.display = "none";
    document.getElementById("video").style.display = "none";

    const iframeVideos = document.querySelectorAll("iframe");
    if (iframeVideos.length > 0) {
      iframeVideos.forEach((iframe) => {
        if (iframe.contentWindow) {
          if (iframe.src.startsWith("https://player.vimeo.com/")) {
            iframe.contentWindow.postMessage('{"method":"pause"}', "*");
          }
        }
      });
    };
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
    
  document.getElementById("countdown").innerHTML = "距離婚禮還剩 " + days + " 天<br>" + hours + " 小時 "
  + minutes + " 分鐘 " + seconds + " 秒<br>期待與你們見面！";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-area").innerHTML = "<h2>婚禮倒數</h2><br>IT'S TIME TO CELEBRATE !";
    document.getElementById("countdown").innerHTML = "LET'S CELEBRATE !";
  }
}, 1000);