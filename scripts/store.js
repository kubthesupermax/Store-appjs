import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { renderStars } from "./utils/stars.js";
import { cart, addTocart } from "../data/cart.js";

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

function updateCartCount() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector(".js-cart-count").innerHTML = cartQuantity;

  console.log(cartQuantity);
}

productsGrid.innerHTML = productsHtml;

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    // When we click on the button, we need to know which product it is
    const productId = button.dataset.productId;
    addTocart(productId);
    updateCartCount();

    // console.log(cart);
  });
});
