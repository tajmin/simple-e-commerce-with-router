
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shop from './components/Shop/Shop';
import Signup from './components/Signup/Signup';
import SuccessfulPurchase from './components/SuccessfulPurchase/SuccessfulPurchase';
import AuthProvider from './context/AuthProvider';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? "dark-theme" : ''}>
      <button onClick={() => setIsDark(!isDark)}>Toggle Dark</button>

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/order-review">
              <OrderReview></OrderReview>
            </Route>
            <PrivateRoute path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>
            <PrivateRoute path="/successful-purchase">
              <SuccessfulPurchase></SuccessfulPurchase>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
