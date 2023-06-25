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
const Myproducts = new IntersectionObserver((entries) => {
  scrollanimation(entries, "coffee-show");
});
const coffee = document.querySelectorAll(".coffee");
coffee.forEach((element) => {
Myproducts.observe(element);
});

const MyAbout_image = new IntersectionObserver((entries) => {
  scrollanimation(entries, "about-image-container-show");
});

const about_image = document.querySelectorAll(".about-image-container");
about_image.forEach( (element) => {
MyAbout_image.observe(element);
});

const MyAbout_description = new IntersectionObserver((entries) => {
  scrollanimation(entries, "about-show");
});
const about = document.querySelectorAll(".about");
about.forEach( (element) => {
MyAbout_description.observe(element);
});

const MyContact_image = new IntersectionObserver((entries) => {
  scrollanimation(entries, "contact-img-show");
});
const contact_image = document.querySelectorAll(".contact-img");
contact_image.forEach((element) => {
  MyContact_image.observe(element);
});

const MyContact_form = new IntersectionObserver( (entries) =>{
  scrollanimation(entries, "contact-form-show")
})
const contact_form = document.querySelectorAll(".contact-form")
contact_form.forEach( (element) => {
MyContact_form.observe(element);
});

const arrowUp = new IntersectionObserver((entries) => {
  scrollanimation(entries, "fa-chevron-up-show")
})

const fa_chevron_up = document.querySelectorAll(".fa-chevron-up")
fa_chevron_up.forEach( (element) => {
arrowUp.observe(element)
})

const container_show = new IntersectionObserver((entries) => {
  scrollanimation(entries, "container-show")
})

const container = document.querySelectorAll(".container")
container.forEach((element) => {
  container_show.observe(element)
})



// let email = document.getElementById("email");
// let message = document.getElementById("message-input");
// let submit_btn = document.getElementById("submit-button");
// submit_btn.addEventListener("click", () => {
//   if (email.value.trim() === '' || message.value.trim() === '' ){
//     console.log("FILLUP!");
//   }
//   else{
//     console.log("THANKYOU");
//     window.location.href="./submit.html"
//   }
// })  
