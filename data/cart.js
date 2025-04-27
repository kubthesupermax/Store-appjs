export const cart = [
  {
    productId: "c6e4e792-5c42-4ff0-981d-84a36df20d43",
    quantity: 2,
  },
  {
    productId: "a4b123d0-9a9f-4a51-a6f8-34e72e0aa11a",
    quantity: 1,
  },
];

export const addTocart = (productId) => {
  let matchingItem;

  // Check if the product is already in the cart
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  // If the product is already in the cart, increase the quantity
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 }); // Add the product to the cart if it's not already in the cart
  }

  // cart.push({ productId, quantity: 1 });
};
