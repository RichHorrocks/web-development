import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';

import GlobalState from './context/GlobalState';
import './App.css';

const App = () => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
        </Switch>
      </BrowserRouter>
    </GlobalState>
  );
};

export default App;
