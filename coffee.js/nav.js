let Menu = document.getElementById("nav-links");
let barsIcon = document.getElementById("bars");
let xmarkIcon = document.getElementById("xmark");

function openmenu() {
  document.body.classList.add("no-scroll");
  Menu.style.display = "flex"
  Menu.style.transform = "scale(1)";
  Menu.style.transition = "transform .5s .1s"
}

function closemenu() {
  document.body.classList.remove("no-scroll");
  Menu.style.transform = "scale(0)";
}

function screenwidth() {
  if (innerWidth < 800) {
    Menu.style.transform = "scale(1)";
    Menu.style.display = "none"
  }
  else{
    Menu.style.transform = "scale(1)";
    Menu.style.display = "flex";
  }
}

screenwidth();
window.addEventListener("resize", screenwidth);