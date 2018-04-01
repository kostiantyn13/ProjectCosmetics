export const WISH_PRODUCT = "WISH_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";

export function wishProduct(id) {
  return {
    type: WISH_PRODUCT,
    id
  };
}

export function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    id
  };
}
export function addProduct(link, name, administration, price, available, wish) {
  return {
    type: ADD_PRODUCT,
    link,
    name,
    administration,
    price,
    available,
    wish
  };
}
