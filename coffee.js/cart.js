
let espresso = document.getElementById("Espresso-cart")
let americano = document.getElementById("Americano-cart")
let aeropress = document.getElementById("Aeropress-cart")
let pourOver = document.getElementById("PourOver-cart")
let frenchPress = document.getElementById("FrenchPress-cart")
let coldBrew = document.getElementById("ColdBrew-cart")
let turkishCoffee = document.getElementById("TurkishCoffee-cart")
let mokaPotCoffee = document.getElementById("MokaPotCoffee-cart")


let cartElements = document.querySelectorAll('.add-to-cart');
let coffeeAddtoCart = document.querySelectorAll(".cart")
let cartValue = parseInt(localStorage.getItem('cartValue')) || 0;

function handleEspressoClick(){
  let cartVal = cartValue += 1;
  localStorage.setItem("cartValue", cartVal);
  if (cartVal <= 20) {
    updateAddToCartValue(cartVal);
  }
  else{
    window.alert("You reach the limit");
  }
}

function updateAddToCartValue(newcartValue){
  cartElements.forEach(cart => {
    cart.innerHTML = newcartValue;
  })
}

updateAddToCartValue(cartValue)
coffeeAddtoCart.forEach( addToCart=>{
  addToCart.addEventListener("click", handleEspressoClick)
})