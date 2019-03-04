export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const addProductToCart = (product, state) => {
  console.log('Adding product', product);

  const updatedCart = [...state.cart]; // Making a copy of the cart array
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id // finding the product item to update
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 }); // Updating the cart
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart }; // return the cart object
};

const removeProductFromCart = (productId, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

export const shopReducer = (state, action) => {
  switch (
    action.type // Object with a type, like redux
  ) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state.cart);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    default:
      return state;
  }
};
