
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';
import CartItem from './CartItem';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  // Obtener la cantidad de elementos en el carrito desde Redux
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleGetStartedClick = (e) => {
    if (e) e.preventDefault(); // Prevenir comportamiento por defecto si es necesario
    setShowProductList(true);
    setShowCart(false);
  };

  const handleHomeClick = (e) => {
    if (e) e.preventDefault();
    setShowProductList(false);
    setShowCart(true);
  };

  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    setShowProductList(true);
    setShowCart(false);
  };

  return (
    <Provider store={store}>
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Welcome To Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
         
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>
      
      </div>
      <div className="header">
          <button className="cart-button" onClick={handleViewCartClick}>
            Cart ({cartCount})
          </button>
        </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick}/>
      </div>
      <div className={`cart-container ${showCart ? 'visible' : ''}`}>
        <CartItem onContinueShopping={handleContinueShopping}/>
      </div>
    </div>
    </Provider>
  );
}

export default App;



