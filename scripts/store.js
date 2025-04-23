import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { renderStars } from "./utils/stars.js";
import { cart } from "../data/cart.js";

const productsGrid = document.querySelector(".js-products-grid");

let productsHtml = ``;

products.forEach((product) => {
  //Check if product has discount
  const hasDiscount = product.priceCents < product.originalPriceCents;
  const starsHTML = renderStars(product.rating.stars);

  productsHtml += ` <div class="product-card">
          <div class="product-badge">Sale</div>
          <img
            src="${product.image}"
            alt="${product.name}"
          />
          <h3>${product.name}</h3>
          <div class="product-rating">
            ${starsHTML} 
            <span>(${product.rating.count})</span>
          </div>
          <p class="product-price">
            ${
              hasDiscount
                ? `<span class="original-price">$${formatCurrency(
                    product.originalPriceCents
                  )}</span>`
                : ""
            }
            <span class="discount-price">$${formatCurrency(
              product.priceCents
            )}</span>
          </p>
          <button class="add-to-cart js-add-to-cart" data-product-id="${
            product.id
          }">Add to Cart</button>
        </div>`;
});

productsGrid.innerHTML = productsHtml;

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Added to cart");
  });
});
