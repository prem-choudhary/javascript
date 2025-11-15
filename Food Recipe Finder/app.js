// ================================
// Food Recipe Finder (Veg Only)
// ================================

// TheMealDB base API
const API_BASE = "https://www.themealdb.com/api/json/v1/1";

// DOM elements
const dom = {
  form: document.getElementById("searchForm"),
  input: document.getElementById("searchInput"),
  results: document.getElementById("results"),
  empty: document.getElementById("empty"),
  loading: document.getElementById("loading"),
  modal: document.getElementById("modal"),
  modalContent: document.getElementById("modalContent"),
  closeModal: document.getElementById("closeModal"),
  modalBackdrop: document.getElementById("modalBackdrop"),
  favoritesToggle: document.getElementById("favoritesToggle"),
  favoritesDrawer: document.getElementById("favorites"),
  favList: document.getElementById("favList"),
  favCount: document.getElementById("favCount"),
  closeFav: document.getElementById("closeFav"),
  clearFav: document.getElementById("clearFav"),
};

// Load favorites
let favorites = loadFavorites();

// Helpers
function el(tag, attrs = {}) {
  const e = document.createElement(tag);
  for (let k in attrs) e[k] = attrs[k];
  return e;
}
function qsa(sel, ctx = document) {
  return Array.from(ctx.querySelectorAll(sel));
}
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// UI Helpers
function showLoading(on = true) {
  dom.loading.classList.toggle("hidden", !on);
  dom.empty.classList.add("hidden");
  dom.results.classList.toggle("hidden", on);
}
function showEmpty(show = true) {
  dom.empty.classList.toggle("hidden", !show);
  dom.results.classList.toggle("hidden", show);
  dom.loading.classList.add("hidden");
}

// ===============================
// VEG-ONLY SEARCH
// ===============================
async function searchRecipes(query) {
  dom.results.innerHTML = "";
  showLoading(true);

  try {
    // Fetch veg-only meals
    const res = await fetch(`${API_BASE}/filter.php?c=Vegetarian`);
    const data = await res.json();

    let meals = data.meals || [];

    // Filter by name
    meals = meals.filter((m) =>
      m.strMeal.toLowerCase().includes(query.toLowerCase())
    );

    if (meals.length === 0) {
      showLoading(false);
      showEmpty(true);
      return;
    }

    renderResults(meals);
  } catch (err) {
    console.error(err);
    showLoading(false);
    showEmpty(true);
  }
}

// ===============================
// Render Results
// ===============================
function renderResults(meals) {
  dom.results.innerHTML = "";
  dom.results.classList.remove("hidden");
  dom.loading.classList.add("hidden");
  dom.empty.classList.add("hidden");

  meals.forEach((meal) => {
    const card = el("article", { className: "card" });

    card.innerHTML = `
      <img class="card-thumb" src="${meal.strMealThumb}" alt="${
      meal.strMeal
    }" />
      <h3 class="card-title">${escapeHtml(meal.strMeal)}</h3>

      <div class="card-actions">
        <button class="small-btn view-btn" data-id="${
          meal.idMeal
        }">View</button>
        <button class="add-btn fav-btn" data-id="${meal.idMeal}">
          ${isFav(meal.idMeal) ? "Saved" : "Save"}
        </button>
      </div>
    `;

    dom.results.appendChild(card);

    card
      .querySelector(".view-btn")
      .addEventListener("click", () => openRecipe(meal.idMeal));

    card.querySelector(".fav-btn").addEventListener("click", (ev) => {
      toggleFavorite(meal);
      ev.target.textContent = isFav(meal.idMeal) ? "Saved" : "Save";
      updateFavUI();
    });
  });
}

// ===============================
// View Recipe Modal
// ===============================
async function openRecipe(id) {
  dom.modal.classList.remove("hidden");
  dom.modal.setAttribute("aria-hidden", "false");
  dom.modalContent.innerHTML = "<p>Loading…</p>";

  try {
    const res = await fetch(`${API_BASE}/lookup.php?i=${id}`);
    const data = await res.json();
    const meal = data.meals && data.meals[0];

    if (!meal) throw new Error("Recipe not found");

    renderRecipeModal(meal);
  } catch {
    dom.modalContent.innerHTML =
      "<p>Unable to load recipe. Please try again.</p>";
  }
}

function closeModal() {
  dom.modal.classList.add("hidden");
  dom.modalContent.innerHTML = "";
  dom.modal.setAttribute("aria-hidden", "true");
}

function renderRecipeModal(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const mea = meal[`strMeasure${i}`];
    if (ing && ing.trim()) ingredients.push(`${mea || ""} ${ing}`.trim());
  }

  dom.modalContent.innerHTML = `
    <div class="recipe-grid">
      <div>
        <img class="card-thumb" src="${meal.strMealThumb}" />
        <h2>${meal.strMeal}</h2>

        <div class="recipe-steps">
          <h4>Instructions</h4>
          <p>${meal.strInstructions.replace(/\n/g, "<br/>")}</p>
        </div>
      </div>

      <aside>
        <div class="recipe-ingredients">
          <h4>Ingredients</h4>
          <ul>${ingredients.map((i) => `<li>${i}</li>`).join("")}</ul>
        </div>
      </aside>
    </div>
  `;
}

// ===============================
// Favorites (LocalStorage)
// ===============================
function loadFavorites() {
  return JSON.parse(localStorage.getItem("veg_favs") || "[]");
}

function saveFavorites() {
  localStorage.setItem("veg_favs", JSON.stringify(favorites));
}

function toggleFavorite(meal) {
  if (isFav(meal.idMeal)) {
    favorites = favorites.filter((f) => f.idMeal !== meal.idMeal);
  } else {
    favorites.push({
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
    });
  }
  saveFavorites();
}

function isFav(id) {
  return favorites.some((f) => f.idMeal === id);
}

function updateFavUI() {
  dom.favCount.textContent = favorites.length;
  dom.favList.innerHTML = "";

  if (!favorites.length) {
    dom.favList.innerHTML = "<li class='empty'>No favorites yet</li>";
    return;
  }

  favorites.forEach((f) => {
    const li = el("li", { className: "fav-item" });

    li.innerHTML = `
      <img src="${f.strMealThumb}" />
      <div class="fav-meta">${f.strMeal}</div>
      <button class="fav-remove" data-id="${f.idMeal}">Remove</button>
    `;

    dom.favList.appendChild(li);
  });

  qsa(".fav-remove", dom.favList).forEach((btn) =>
    btn.addEventListener("click", () => {
      favorites = favorites.filter((x) => x.idMeal !== btn.dataset.id);
      saveFavorites();
      updateFavUI();
    })
  );
}

// ===============================
// Events
// ===============================
dom.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const q = dom.input.value.trim();
  if (q) searchRecipes(q);
});

dom.closeModal.addEventListener("click", closeModal);
dom.modalBackdrop.addEventListener("click", closeModal);

dom.favoritesToggle.addEventListener("click", () => {
  const visible = dom.favoritesDrawer.classList.toggle("visible");
  dom.favoritesDrawer.classList.toggle("hidden", !visible);
  dom.favoritesToggle.setAttribute("aria-pressed", visible);
  updateFavUI();
});

dom.closeFav.addEventListener("click", () => {
  dom.favoritesDrawer.classList.remove("visible");
  dom.favoritesDrawer.classList.add("hidden");
});

dom.clearFav.addEventListener("click", () => {
  favorites = [];
  saveFavorites();
  updateFavUI();
});

// Initial render
updateFavUI();

// Default veg search
searchRecipes("paneer");
