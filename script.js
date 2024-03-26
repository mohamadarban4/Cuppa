
// var t1 = gsap.timeline()
// t1.from(" #page1 #homecontent h1", {
//   y: -100,
//   // duration: 1,
//   // delay: 0.5,
//   // opacity: 0,
//   // stagger:0.2,
// })
// Example GSAP Animation

const buttons = document.querySelectorAll(".magnetic-button");

// Function to create the magnetic effect
function applyMagneticEffect(event) {
  const button = event.target;
  gsap.to(button, {
    scale: 1.1,
    duration: 0.2,
    ease: "power1.inOut",
    onComplete: function () {
      gsap.to(button, {
        scale: 1,
        duration: 0.2,
        ease: "power1.inOut",
      });
    },
  });
}

// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener("mouseenter", applyMagneticEffect);
});
let totalPrice = 0;

function increment(item) {
  const quantityElement = document.getElementById(item + '-quantity');
  const priceElement = document.getElementById(item + '-price');
  const price = parseInt(priceElement.innerText.replace('$', ''));
  const quantity = parseInt(quantityElement.innerText);
  quantityElement.innerText = quantity + 1;
  totalPrice += price;
  document.getElementById('total-price').innerText = 'Total: $' + totalPrice.toFixed(2);
}

function decrement(item) {
  const quantityElement = document.getElementById(item + '-quantity');
  const priceElement = document.getElementById(item + '-price');
  const price = parseInt(priceElement.innerText.replace('$', ''));
  const quantity = parseInt(quantityElement.innerText);
  if (quantity > 0) {
    quantityElement.innerText = quantity - 1;
    totalPrice -= price;
    document.getElementById('total-price').innerText = 'Total: $' + totalPrice.toFixed(2);
  }
}

function checkout() {
  // Handle the checkout logic here, e.g., redirect to a checkout page
  alert('Thank you for your purchase!');
}
