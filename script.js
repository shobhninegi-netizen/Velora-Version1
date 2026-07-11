let cart = JSON.parse(localStorage.getItem("cart")) || [];

const messages = [
  "READY TO UPGRADE BEAUTIFUL SOUL ✨",
  "YOU JUST ADDED PURE LUXURY 💅",
  "VELORA LOVES YOUR CHOICE 💖",
  "PREMIUM PICK SELECTED 🔥",
  "STYLE LEVEL INCREASED ✨"
];

// ---------------- TOAST ----------------
function showToast(customMsg = null) {
  const container = document.getElementById("toast-container");
  const sound = document.getElementById("toast-sound");

  if (!container) return;

  container.innerHTML = "";

  const msg =
    
    messages[Math.floor(Math.random() * messages.length)];

  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 50);

  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);

  setTimeout(() => {
    container.innerHTML = "";
  }, 3000);
}

// ---------------- UPDATE CART COUNT ----------------
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

updateCartCount();

// ---------------- CLEAR CART ----------------
function clearCart() {
  if (cart.length === 0) {
    showToast("CART ALREADY EMPTY 😄");
    return;
  }

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showToast("CART CLEARED 🛒");
}

const clearBtn = document.getElementById("clear-cart");
if (clearBtn) {
  clearBtn.addEventListener("click", clearCart);
}

// ---------------- GO TO CART PAGE ----------------
const cartBtn = document.getElementById("cart-btn");
if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    location.href = "cart.html";
  });
}

// ---------------- MOBILE MENU ----------------
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

// ---------------- MOBILE CART BUTTON ----------------
const mobileCartBtn = document.querySelector(".mobile-cart-btn");
if (mobileCartBtn) {
  mobileCartBtn.addEventListener("click", () => {
    location.href = "cart.html";
  });
}

// ---------------- MOBILE CLEAR CART ----------------
const mobileClearBtn = document.querySelector(".mobile-clear-cart");
if (mobileClearBtn) {
  mobileClearBtn.addEventListener("click", clearCart);
}

// ---------------- ADD TO CART ----------------
function addToCart(button) {
  const card = button.closest(".product-card");

  const id = card.dataset.id;
  const name = card.querySelector("h3").innerText;
  const quantity = Number(card.querySelector("select").value);
  const image = card.querySelector("img").src;

  const price = Number(
    card
      .querySelector(".price")
      .innerText.replace("Price: $", "")
      .replace(",", "")
  );

  const description =
    card.querySelector(".description")?.innerText || "";

  const rating =
    card.querySelector(".rating")?.innerText || "";

  const product = {
    id,
    name,
    quantity,
    image,
    price,
    description,
    rating
  };

  let existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  showToast();

  console.log(cart);
}
