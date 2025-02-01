let cartCount = 0;
let cartTotal = 0;

function addToCart(productName, price) {
  cartCount++;
  cartTotal += price;

  // Update cart count in the UI
  document.getElementById("cart-count").textContent = cartCount;

  // Show alert
  alert(`${productName} added to cart!\nTotal: $${cartTotal.toFixed(2)}`);
}
