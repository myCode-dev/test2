// 滚动到指定元素
function JumpTo(id) {
  var jumpto = document.getElementById(id);
  console.log(jumpto);
  jumpto.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

// 元素显现效果
function reveal() {
  var reveals = document.querySelectorAll("#lookforward,.countdown-area-box>div,.video-area,.dresscode-box,.color-box,.timeline,.map,.traffic,.traffic-content,.traffic-guide,.invite-content,.invite-pic,.intro-content,.celebrate-section p,.celebrate-section h2")
  console.log(reveals)
  for (var i = 0; i < reveals.length; i++) {
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
window.addEventListener("scroll", reveal);

// 动画结束后滚动
document.addEventListener('DOMContentLoaded', () => {
  const celebrateText = document.querySelector('.celebrate-text');
  celebrateText.addEventListener('animationend', (event) => {
      if (event.animationName === 'typing') {
          setTimeout(() => {
              window.scrollTo({
                  top: window.innerHeight, // 滚动到下一视窗高度
                  behavior: 'smooth' // 平滑滚动
              });
          }, 2000); // 等待 3000 毫秒 (3 秒)
      }
  });
});

// 打开 Google 地图
function openGoogleMap() {
  window.open('https://www.google.com/maps/place/台北市士林區凱旋路49號', '_blank');
}

// 定时切换图片
setInterval(changeImg, 1000);

function changeImg() {
  let Pic1 = document.getElementById("invite-pic1-2"),
      Pic2 = document.getElementById("invite-pic2-2");
  Pic1.style.display = Pic1.style.display === "none" ? "block" : "none";
  Pic2.style.display = Pic2.style.display === "none" ? "block" : "none";
}

// 婚礼倒计时
var TheDay = new Date("Oct 26, 2024 12:00:00").getTime();

var x = setInterval(function () {
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

  // document.getElementById("countdown").innerHTML = "距離婚禮還剩 " + days + " 天<br>" + hours + " 小時 " + minutes + " 分鐘 " + seconds + " 秒<br>期待與你們見面！";

  if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown-area").innerHTML = "<h2>婚禮倒數</h2><br>IT'S TIME TO CELEBRATE !";
      document.getElementById("countdown").innerHTML = "LET'S CELEBRATE !";
  }
}, 1000);

// 显示 RSVP
function showRSVP() {
  window.open('https://www.surveycake.com/s/08bAO', '_blank');
}

