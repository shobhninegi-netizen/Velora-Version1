let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ---------------- RENDER CART ---------------- */
function renderCart() {
  const container = document.getElementById("cart-container");

  if (!container) return;

  container.innerHTML = "";

  cart.forEach((item) => {
    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">

        <div class="cart-details">
          <h3>${item.name}</h3>
          <p>Quantity: ${item.quantity}</p>
          <p>Price: $${item.price * item.quantity}</p>
          <p>Description: ${item.description}</p>
          <p>Rating: ${item.rating}</p>

          <button
            class="remove-btn"
            data-id="${item.id}">
            Remove
          </button>
        </div>
      </div>
    `;
  });

  const buttons = document.querySelectorAll(".remove-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      removeFromCart(button.dataset.id);
    });
  });
}

/* ---------------- REMOVE ITEM ---------------- */
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();
  calculateSummary();
  showToast("ITEM REMOVED FROM CART 🛒");
}

/* ---------------- CALCULATE SUMMARY ---------------- */
function calculateSummary() {
  const subtotalElement = document.getElementById("subtotal");
  const shippingElement = document.getElementById("shipping");
  const taxElement = document.getElementById("tax");
  const discountElement = document.getElementById("discount");
  const grandTotalElement = document.getElementById("grand-total");
  const giftCardElement = document.getElementById("giftCard");

  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.quantity;
  });

  const shipping = subtotal >= 100 ? 0 : 10;
  const tax = subtotal * 0.05;
  const discount = subtotal >= 100 ? subtotal * 0.1 : 0;
  const grandTotal = subtotal + shipping + tax - discount;

  const giftCard =
    subtotal >= 100
      ? "🎉 Congratulations! Gift Unlocked"
      : "🎁 Shop $100 or more to unlock a gift";

  if (subtotalElement) {
    subtotalElement.innerText = `$${subtotal.toFixed(2)}`;
  }

  if (shippingElement) {
    shippingElement.innerText = `$${shipping.toFixed(2)}`;
  }

  if (taxElement) {
    taxElement.innerText = `$${tax.toFixed(2)}`;
  }

  if (discountElement) {
    discountElement.innerText = `$${discount.toFixed(2)}`;
  }

  if (grandTotalElement) {
    grandTotalElement.innerText = `$${grandTotal.toFixed(2)}`;
  }

  if (giftCardElement) {
    giftCardElement.innerText = giftCard;
  }
}

/* ---------------- TOAST ---------------- */


/* ---------------- INIT ---------------- */
renderCart();
calculateSummary();
