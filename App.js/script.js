// Open Styles
var hamburger = document.querySelector(".header__hamburger");
var header = document.querySelector(".header");

hamburger.addEventListener('click', () => {
  if(header.classList.contains("open")) {
    header.classList.remove("open");
  }

  else {
    header.classList.add("open");
  }
});

/* =========== End of Open Styles =========== */


// Set countdown timer

// Set the date we're counting down to for Bid 1
var countDownDate = new Date("Jan 15, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("heroBid").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("heroBid").innerHTML = "SOLD OUT";
  }
}, 1000);


// Set countdown timer for Asset 1

var Asset1countDownDate = new Date("Feb 18, 2023 00:30:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = Asset1countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("asset1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("asset1").innerHTML = "SOLD OUT";
  }
}, 1000);


// Set countdown timer for Asset 2
var Asset2countDownDate = new Date("Dec 31, 2022 15:15:02").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = Asset2countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("asset2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("asset2").innerHTML = "SOLD OUT";
  }
}, 1000);

// Set countdown timer for Asset 3
var Asset3countDownDate = new Date("Jan 31, 2023 15:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = Asset3countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("asset3").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("asset3").innerHTML = "SOLD OUT";
  }
}, 1000);

// Set countdown timer for Asset 4
var Asset4countDownDate = new Date("Jan 15, 2023 15:00:15").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = Asset4countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("asset4").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("asset4").innerHTML = "SOLD OUT";
  }
}, 1000);

// Set countdown timer for Asset 5
var Asset5countDownDate = new Date("Feb 20, 2023 15:37:17").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = Asset5countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("asset5").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("asset5").innerHTML = "SOLD OUT";
  }
}, 1000);

// Set countdown timer for Asset 6
var Asset6countDownDate = new Date("Feb 15, 2023 15:37:13").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = Asset6countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("asset6'").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("asset6'").innerHTML = "SOLD OUT";
  }
}, 1000);

// Set countdown timer for Asset 7
var Asset7countDownDate = new Date("Dec 27, 2022 15:37:05").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = Asset7countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("asset7").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("asset7").innerHTML = "SOLD OUT";
  }
}, 1000);

// Set countdown timer for Asset 8
var Asset8countDownDate = new Date("March, 2023 15:37:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = Asset8countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("asset8").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("asset8").innerHTML = "SOLD OUT";
  }
}, 1000);
/* =============End of Asset Countdown=============== */


//Bid counter

// Bid 1


// Newsletter Submission Message

function Message() {
  alert("Your mail was successfully submitted");
}


// initialize Swiper
var swiper = new Swiper(".swiper-wrapper", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});