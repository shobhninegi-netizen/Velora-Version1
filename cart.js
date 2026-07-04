let cart = JSON.parse(localStorage.getItem("cart"))|| [];
/* ---------------- RENDER CART ---------------- */

function renderCart() {
    const container = document.getElementById("cart-container");
    container.innerHTML="";
 

    cart.forEach(item => {
        container.innerHTML +=`
        <div class="cart-item">
        <img src="${item.image}" width="80">
        <h3> ${item.name}</h3>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: ${item.price*item.quantity}</p> 
        <p>Description: ${item.description}</p> 
        <p>Rating: ${item.rating}</p>
        <button
class="remove-btn"
data-id="${item.id}">
Remove
</button>
        </div>     
       `;
       
        
    });
    const buttons = document.querySelectorAll(".remove-btn");

    buttons.forEach(button=>{
        button.addEventListener("click",()=>{
            const id = button.dataset.id;
            removeFromCart(id);
        });
    });
}
/* ---------------- REMOVE ITEM ---------------- */
     function removeFromCart(id) {
         cart = cart.filter(item => item.id !== id);
         
         localStorage.setItem("cart",JSON.stringify(cart));
        
         renderCart();
         showToast("ITEM REMOVED FROM CART 🛒");
        calculateSummary();}
        
/* ---------------- CALCULATE SUMMARY ---------------- */
 function calculateSummary(){
     const  subtotalElement = document.getElementById("subtotal");
   const shippingElement = document.getElementById("shipping");
    const taxElement = document.getElementById("tax");
    const grandTotalElement = document.getElementById("grand-total");
    const giftCardElement = document.getElementById("giftCard");
const discountElement = document.getElementById("discount");
  let  subtotal=0;
  let  shipping=0;
   let tax=0;
    let grandTotal=0;
    let discount=0;
    let giftCard="";
     // 🔥 subtotal calculation only
    cart.forEach(item=>{
        subtotal+= item.price*item.quantity;
        
    });
     // 🚚 shipping rule
    
    if(subtotal>=100){
        shipping=0;
         
    }
    else{
        shipping=10;
    }

 // 🧾 tax rule (5%)
tax= subtotal*0.05;
if (subtotal >= 100) {
    discount = subtotal * 0.10; // 10% discount
} else {
    discount = 0;
}
// 💰 grand total
grandTotal = subtotal+shipping+tax-discount;
 // 🎁 gift card logic
if (subtotal >= 100){
    giftCard = "🎉 Congratulations! Gift Unlocked"
}
else{
    giftCard = "🎁 Shop $100 or more"
}
  // 🖥️ update UI
subtotalElement.innerText = subtotal;
    shippingElement.innerText = shipping;
    taxElement.innerText = tax;
    grandTotalElement.innerText = grandTotal;
    discountElement.innerText = discount;
    giftCardElement.innerText = giftCard;

 }/* ---------------- INIT ---------------- */
 renderCart();
 calculateSummary();
 
