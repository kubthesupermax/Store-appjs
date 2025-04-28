import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let cartSummaryHTML = ``;

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  //   console.log(matchingProduct);

  cartSummaryHTML += `          <div class="summary-item">
            <div class="item-img">
              <img src="${matchingProduct.image}" alt="${
    matchingProduct.name
  }" />
              <span class="item-quantity">${cartItem.quantity}</span>
            </div>
            <div class="item-info">
              <h4>${matchingProduct.name}</h4>
              <p>Color: Black</p>
            </div>
            <div class="item-price">$${formatCurrency(
              matchingProduct.priceCents
            )}</div></div>
          </div>
`;

  console.log(cartSummaryHTML);
});

document.querySelector(".js-summary-items").innerHTML = cartSummaryHTML;
