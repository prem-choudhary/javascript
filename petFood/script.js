// CART SIDEBAR ELEMENTS
const openCartBtn = document.getElementById("openCart");
const closeCartBtn = document.getElementById("closeCart");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cart-count");

let cart = [];

// OPEN CART
openCartBtn.addEventListener("click", () => {
  cartSidebar.classList.add("active");
  cartOverlay.classList.add("active");
});

// CLOSE CART
closeCartBtn.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
});

// CLOSE CART WHEN CLICK OVERLAY
cartOverlay.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
});

// ADD TO CART BUTTONS
document.querySelectorAll(".add-cart-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const product = e.target.closest(".product-card");

    const item = {
      id: product.dataset.id,
      name: product.dataset.name,
      price: Number(product.dataset.price),
      img: product.dataset.img,
    };

    cart.push(item);
    updateCart();
  });
});

// UPDATE CART DISPLAY
function updateCart() {
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((product, index) => {
    total += product.price;

    const li = document.createElement("li");

    li.innerHTML = `
      <img src="${product.img}">
      <div class="cart-info">
        <p>${product.name}</p>
        <strong>$${product.price}</strong>
      </div>
      <button class="remove-item" data-index="${index}">X</button>
    `;

    cartItemsContainer.appendChild(li);
  });

  cartTotal.innerText = "$" + total.toFixed(2);
  cartCount.innerText = cart.length;

  // REMOVE ITEM
  document.querySelectorAll(".remove-item").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      cart.splice(idx, 1);
      updateCart();
    });
  });
}
