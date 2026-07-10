
let cart = JSON.parse(localStorage.getItem("cart")) || [];




const clearBtn = document.getElementById("Clear-Cart");
if (clearBtn) {
  clearBtn.addEventListener("click", clearCart);
}

const messages = [
  "READY TO UPGRADE BEAUTIFUL SOUL ✨",
  "YOU JUST ADDED PURE LUXURY 💅",
  "VELORA LOVES YOUR CHOICE 💖",
  "PREMIUM PICK SELECTED 🔥",
  "STYLE LEVEL INCREASED ✨"
];

// toast function sirf toast ke liye
function showToast(customMsg = null) {
  const container = document.getElementById("toast-container");
  const sound = document.getElementById("toast-sound");

  if (!container) {
    console.log("toast-container not found");
    return;
  }

  // remove old toast if any
  container.innerHTML = "";

  // pick random message if custom message not passed
  const msg = customMsg || messages[Math.floor(Math.random() * messages.length)];

  // create toast
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;

  container.appendChild(toast);

  // trigger animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 50);

  // play sound safely
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(err => console.log("Sound play blocked:", err));
  }

  // remove toast
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);

  setTimeout(() => {
    container.innerHTML = "";
  }, 3000);
}

// clear cart function
function clearCart() {
  if (cart.length === 0) {
    showToast("CART ALREADY EMPTY 😄");
    return;
  }

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").innerText = cart.length;

  showToast("CART CLEARED 🛒");
}
<<<<<<< HEAD
=======
document.querySelector(".mobile-cart-btn").onclick = () => {
  document.getElementById("cart-btn").click();
};

document.querySelector(".mobile-clear-cart").onclick = () => {
  document.getElementById("clear-cart").click();
};
>>>>>>> 78a338f (updated Velora project)
function addToCart(button ){
  document.getElementById("cart-btn").addEventListener("click", () => {
  location.href = "cart.html";
});
   const card = button.closest(".product-card");
   const id = card.dataset.id;
   const name = card.querySelector("h3").innerText;
   const quantity = Number(card.querySelector("select").value);
   const  image = card.querySelector("img").src;
<<<<<<< HEAD
const price = Number(
    card.querySelector(".price").innerText.replace("Price: $", "")
);
console.log(card.querySelector(".price").innerText);
const description = card.querySelector("p").innerText;
=======
   const price = Number(
    card.querySelector(".price").innerText
    .replace("Price: $", "")
    .replace(",", "")
);
console.log(card.querySelector(".price").innerText);
const description = card.querySelector(".description").innerText;
>>>>>>> 78a338f (updated Velora project)
const rating = card.querySelector(".rating").innerText;
   const product = {
      id,
      name,
      quantity,
      image,
      price,
      description,
      rating
   };

   // to check if the product already exist

   let existing= cart.find(item => item.id===id);

if (existing){

  existing.quantity+= quantity;
} else {
  cart.push(product)
}
// save
localStorage.setItem("cart",JSON.stringify(cart));
console.log(cart);
showToast();
document.getElementById("cart-count").innerText = cart.length;
}
<<<<<<< HEAD
=======
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});


document.querySelector(".mobile-cart-btn").addEventListener("click",()=>{
  location.href="cart.html";
});
>>>>>>> 78a338f (updated Velora project)
