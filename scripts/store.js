import { products } from "../data/products.js";
import { formartCurrency } from "./utils/money.js";

const productsGrid = document.querySelector(".js-products-grid");

let productsHtml = ``;

products.forEach((product) => {
  //Check if product has discount
  const hasDiscount = product.priceCents < product.originalPriceCents;
  productsHtml += ` <div class="product-card">
          <div class="product-badge">Sale</div>
          <img
            src="${product.image}"
            alt="${product.name}"
          />
          <h3>${product.name}</h3>
          <div class="product-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <span>(245)</span>
          </div>
          <p class="product-price">
            ${
              hasDiscount
                ? `<span class="original-price">$${formatCurrency(
                    product.originalPriceCents
                  )}</span>`
                : ""
            }
            <span class="discount-price">$${formartCurrency(
              product.priceCents
            )}</span>
          </p>
          <button class="add-to-cart">Add to Cart</button>
        </div>`;
});

productsGrid.innerHTML = productsHtml;
