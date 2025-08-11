document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.querySelector(".main-image");
  const thumbnails = document.querySelectorAll(".thumbnails img");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src.replace("100x100", "400x400");
      mainImage.alt = thumb.alt;
    });
  });

  const addToCartButton = document.querySelector(".add-to-cart");
  addToCartButton.addEventListener("click", () => {
    alert("Product added to cart!");
  });
});
