import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ShopContext from './context/shop-context';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import './App.css';

class App extends Component {
  state = {
    products: [
      { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
      { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
      { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
      { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    ],
    cart: []
  };

  addProductToCart = product => {};

  removeProductFromCart = productId => {};

  render() {
    return (
      <ShopContext.Provider
        value={{
          products: this.state.products,
          cart: this.state.cart
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/cart" component={CartPage} exact />
          </Switch>
        </BrowserRouter>
      </ShopContext.Provider>
    );
  }
}

export default App;
