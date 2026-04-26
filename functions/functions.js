import { cart } from "../cart.js";
import { products } from "../data/products.js";

export function updateCart(cartList) {
  let quantity = 0;
  cartList.forEach((cartList) => {
    quantity += cartList.quantity;
  });
  return quantity;
}

export function addToCart(productId) {
  let matchingProduct;
  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingProduct = item;
    }
  });
  if (matchingProduct) {
    matchingProduct.quantity++;
  } else {
    cart.push({
      productId,
      quantity: 1,
    });
  }
  console.log(cart);
}


export function FixMoney(moneyToConvert) {
  let fixedMoney = ((moneyToConvert / 100) ).toFixed(2);
  return fixedMoney;
}