const scrollanimation = (entries, className) =>{
  entries.forEach((entry) =>{
    if (entry.isIntersecting){
      entry.target.classList.add(className);
    }
    // to not make the scroll animation redundant
    // else {
    //   entry.target.classList.remove(className);
    // 
  });
}
const Myclock = new IntersectionObserver((entries) => {
  scrollanimation(entries, "clock-show");
});

const clock = document.querySelectorAll(".clock-container");
clock.forEach((element) => {
  Myclock.observe(element);
});


let countdown = setInterval(Countdown, 1000);

function Countdown() {
  const currentTime = new Date();
  let remainingHour = 24 - currentTime.getHours() - 1;
  let remainingMinutes = 60 - currentTime.getMinutes();
  let remainingSeconds = 60 - currentTime.getSeconds();
  document.getElementById("clock").innerHTML = `${remainingHour} hours : ${remainingMinutes} minutes : ${remainingSeconds} seconds`;
}

