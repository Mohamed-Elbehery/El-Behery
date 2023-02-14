//! Count Down Timer
const countDownDate = new Date("Apr 15, 2023 23:59:59").getTime();

const counter = setInterval(() => {
  // Get Date Now
  const dateNow = new Date().getTime();

  // Find The Difference Between Now and Countdown Date
  const dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24)); // the good one

  const hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  
  const minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));

  const seconds = Math.floor(dateDiff % (1000 * 60) / 1000);

  document.querySelector(".days").innerHTML = `${days}` < 10 ? `0${days}` : `${days}`;
  document.querySelector(".hours").innerHTML = `${hours}` < 10 ? `0${hours}` : `${hours}`;
  document.querySelector(".minutes").innerHTML = `${minutes}` < 10 ? `0${minutes}` : `${minutes}`;
  document.querySelector(".seconds").innerHTML = `${seconds}` < 10 ? `0${seconds}` : `${seconds}`;

  if(dateDiff < 0) {
    clearInterval(counter);
  }

}, 1000)

//! Increase Numbers On Scrolling
const nums = document.querySelectorAll(".box .number");
const statsSection = document.querySelector(".statistics");
let started = false;

window.addEventListener("scroll",() => {
  if (window.scrollY >= statsSection.offsetTop - 700) {
    if (!started) { // started == false ?
      nums.forEach(num => startCount(num));
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 3000 / goal)
}

//! Animate Width On Scrolling
const skillsSection = document.querySelector('.our-skills');
const spans = document.querySelectorAll('.the-progress span');

window.addEventListener("scroll",() => {
  if (window.scrollY >= skillsSection.offsetTop - 700) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    })
  }
});
