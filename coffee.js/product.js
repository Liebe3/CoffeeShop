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
const Myglide = new IntersectionObserver((entries) => {
  scrollanimation(entries, "glide-show");
});

const glide = document.querySelectorAll(".glide");
glide.forEach((element) => {
  Myglide.observe(element);
});

const Myglides = new IntersectionObserver((entries) => {
  scrollanimation(entries, "glides-show");
});

const glides = document.querySelectorAll(".glides");
glides.forEach((element) => {
  Myglides.observe(element);
});


