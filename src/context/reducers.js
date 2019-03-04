const addProductToCart = product => {
  console.log('Adding product', product);

  const updatedCart = [...cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  setTimeout(() => {
    setCart(updatedCart);
  }, 700);
};

const removeProductFromCart = productId => {
  const updatedCart = [...cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  setTimeout(() => {
    setCart(updatedCart);
  }, 700);
};