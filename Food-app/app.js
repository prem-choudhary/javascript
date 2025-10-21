// App state
let cartItems = [];
let selectedCategory = "all";

// Initialize app
document.addEventListener("DOMContentLoaded", function () {
  initEventListeners();
  renderFoodItems();
  updateCartDisplay();
});


// Event listeners
function initEventListeners() {
  // Navigation
  document.getElementById("home-link").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("menu-link").addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector('[data-name="category-filter"]')
      .scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("about-link").addEventListener("click", (e) => {
    e.preventDefault();
    alert("About page coming soon!");
  });


  document.getElementById("contact-link").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Contact: hello@foodieexpress.com");
  });

  
  document.getElementById("signin-btn").addEventListener("click", () => {
    alert("Sign in functionality coming soon!");
  });

  // Hero badges
  document.querySelectorAll(".hero-badge").forEach((badge) => {
    badge.addEventListener("click", () => {
      alert(badge.dataset.message);
    });
  });

  // Category buttons
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedCategory = btn.dataset.category;
      updateCategoryButtons();
      renderFoodItems();
    });
  });

  // Cart
  document.getElementById("cart-btn").addEventListener("click", () => {
    document.getElementById("cart-modal").classList.remove("hidden");
  });

  document.getElementById("close-cart").addEventListener("click", () => {
    document.getElementById("cart-modal").classList.add("hidden");
  });

  document.getElementById("checkout-btn").addEventListener("click", () => {
    const total = calculateTotal();
    alert(`Proceeding to checkout with total: $${total.toFixed(2)}`);
  });
}

// Update category buttons
function updateCategoryButtons() {
  document.querySelectorAll(".category-btn").forEach((btn) => {
    if (btn.dataset.category === selectedCategory) {
      btn.className =
        "category-btn flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-md bg-[var(--primary-color)] text-white shadow-lg scale-105";
    } else {
      btn.className =
        "category-btn flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-md bg-white text-[var(--text-secondary)] hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)]";
    }
  });
}

// Render food items
function renderFoodItems() {
  const filteredFoods =
    selectedCategory === "all"
      ? foodData
      : foodData.filter((food) => food.category === selectedCategory);

  const foodGrid = document.getElementById("food-grid");
  foodGrid.innerHTML = "";

  filteredFoods.forEach((food) => {
    const foodCard = createFoodCard(food);
    foodGrid.appendChild(foodCard);
  });
}

// Create food card
function createFoodCard(food) {
  const card = document.createElement("div");
  card.className =
    "food-card card hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95";
  card.innerHTML = `
        <div class="aspect-w-16 aspect-h-10 mb-4 relative overflow-hidden rounded-lg">
            <img src="${food.image}" alt="${food.name}" class="w-full h-48 object-cover rounded-lg hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div class="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                    Click to view details
                </div>
            </div>
        </div>
        <div class="space-y-3">
            <div>
                <h3 class="font-semibold text-lg text-[var(--text-primary)] mb-1 hover:text-[var(--primary-color)] transition-colors">${food.name}</h3>
                <p class="food-description text-[var(--text-secondary)] text-sm line-clamp-2 transition-all duration-300">${food.description}</p>
                <div class="food-details hidden mt-2 text-xs fade-in">
                    <span class="font-medium text-[var(--primary-color)]">Ingredients:</span> Fresh ingredients, prepared daily with care.
                    <div class="flex justify-between items-center mt-2">
                        <span>Nutritional info available</span>
                        <button class="nutrition-btn text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-colors">
                            View details
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <span class="text-2xl font-bold text-[var(--primary-color)] hover:scale-110 transition-transform">$${food.price}</span>
                    <div class="flex items-center space-x-1 text-sm text-[var(--text-secondary)]">
                        <div class="icon-star text-yellow-400 text-sm hover:text-yellow-500 transition-colors cursor-pointer"></div>
                        <span class="hover:text-[var(--primary-color)] transition-colors cursor-pointer">${food.rating}</span>
                        <span class="hover:text-[var(--primary-color)] transition-colors cursor-pointer">(${food.reviews})</span>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between pt-2">
                <div class="flex items-center space-x-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors cursor-pointer">
                    <div class="icon-clock text-sm"></div>
                    <span>${food.prepTime} min</span>
                </div>
                <button class="add-to-cart btn-primary flex items-center space-x-2 hover:scale-110 active:scale-95 transition-all duration-200 hover:shadow-lg" data-food-id="${food.id}">
                    <div class="icon-plus text-sm"></div>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    `;

  // Add click handlers
  card.addEventListener("click", (e) => {
    if (
      !e.target.closest(".add-to-cart") &&
      !e.target.closest(".nutrition-btn")
    ) {
      toggleFoodDetails(card);
    }
  });

  card.querySelector(".add-to-cart").addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(food);
  });

  const nutritionBtn = card.querySelector(".nutrition-btn");
  if (nutritionBtn) {
    nutritionBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      alert("Nutritional information coming soon!");
    });
  }

  return card;
}

// Toggle food details
function toggleFoodDetails(card) {
  const description = card.querySelector(".food-description");
  const details = card.querySelector(".food-details");

  if (card.classList.contains("expanded")) {
    card.classList.remove("expanded");
    description.classList.add("line-clamp-2");
    details.classList.add("hidden");
  } else {
    card.classList.add("expanded");
    description.classList.remove("line-clamp-2");
    details.classList.remove("hidden");
  }
}

// Cart functions
function addToCart(food) {
  const existing = cartItems.find((item) => item.id === food.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({ ...food, quantity: 1 });
  }
  updateCartDisplay();
}

function removeFromCart(foodId) {
  cartItems = cartItems.filter((item) => item.id !== foodId);
  updateCartDisplay();
}

function updateQuantity(foodId, quantity) {
  if (quantity === 0) {
    removeFromCart(foodId);
    return;
  }
  const item = cartItems.find((item) => item.id === foodId);
  if (item) {
    item.quantity = quantity;
    updateCartDisplay();
  }
}

function calculateTotal() {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 25 ? 0 : 3.99;
  return subtotal + deliveryFee;
}

function updateCartDisplay() {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = document.getElementById("cart-count");

  if (totalItems > 0) {
    cartCount.textContent = totalItems;
    cartCount.classList.remove("hidden");
  } else {
    cartCount.classList.add("hidden");
  }

  renderCartItems();
}

function renderCartItems() {
  const emptyCart = document.getElementById("empty-cart");
  const cartItemsDiv = document.getElementById("cart-items");
  const itemsContainer = document.getElementById("items-container");
  const subtotalEl = document.getElementById("subtotal");
  const deliveryFeeEl = document.getElementById("delivery-fee");
  const totalEl = document.getElementById("total");

  if (cartItems.length === 0) {
    emptyCart.classList.remove("hidden");
    cartItemsDiv.classList.add("hidden");
    return;
  }

  emptyCart.classList.add("hidden");
  cartItemsDiv.classList.remove("hidden");

  // Render cart items
  itemsContainer.innerHTML = "";
  cartItems.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className =
      "flex items-center space-x-4 bg-gray-50 rounded-lg p-4";
    itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
            <div class="flex-1">
                <h3 class="font-medium text-[var(--text-primary)]">${item.name}</h3>
                <p class="text-[var(--primary-color)] font-semibold">$${item.price}</p>
                <div class="flex items-center space-x-2 mt-2">
                    <button class="decrease-btn w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-400 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95" data-item-id="${item.id}">
                        <div class="icon-minus text-sm"></div>
                    </button>
                    <span class="px-3 py-1 bg-white rounded text-center min-w-[2rem] font-medium border-2 border-gray-100">${item.quantity}</span>
                    <button class="increase-btn w-8 h-8 rounded-full bg-gray-200 hover:bg-[var(--primary-color)] hover:text-white active:bg-[var(--accent-color)] flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95" data-item-id="${item.id}">
                        <div class="icon-plus text-sm"></div>
                    </button>
                    <button class="remove-btn ml-auto text-[var(--primary-color)] hover:text-[var(--accent-color)] p-2 rounded-full hover:bg-red-50 active:bg-red-100 transition-all duration-200 hover:scale-110 active:scale-95" data-item-id="${item.id}">
                        <div class="icon-trash-2 text-sm"></div>
                    </button>
                </div>
            </div>
        `;

    // Add event listeners for quantity buttons
    itemElement.querySelector(".decrease-btn").addEventListener("click", () => {
      updateQuantity(item.id, item.quantity - 1);
    });

    itemElement.querySelector(".increase-btn").addEventListener("click", () => {
      updateQuantity(item.id, item.quantity + 1);
    });

    itemElement.querySelector(".remove-btn").addEventListener("click", () => {
      removeFromCart(item.id);
    });

    itemsContainer.appendChild(itemElement);
  });

  // Update totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 25 ? 0 : 3.99;
  const total = subtotal + deliveryFee;

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  deliveryFeeEl.textContent =
    deliveryFee === 0 ? "Free" : `$${deliveryFee.toFixed(2)}`;
  totalEl.textContent = `$${total.toFixed(2)}`;
}
