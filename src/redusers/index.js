import { WISH_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT } from "../action";

function productReducer({}, action) {
  switch (action.type) {
    case WISH_PRODUCT:
      return {
        link: action.link,
        name: action.name,
        administration: action.administration,
        price: action.price,
        available: action.available,
        wish: action.wish,
        key: action.key,
        id: action.id
      };
    case ADD_PRODUCT:
      if (state.id === action.id) {
        state = action.data;
      }
      return state;
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case WISH_PRODUCT:
      return state.map(el => productReducer(el, action));
    case DELETE_PRODUCT:
      return state.filter(el => el.id !== action.id);
    case ADD_PRODUCT:
      return [...state, productReducer(undefined, action)];
    default:
      return state;
  }
}
