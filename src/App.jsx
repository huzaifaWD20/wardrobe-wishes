import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CategoriesPage from './pages/CategoriesPage';
import SingleProductPage from './pages/SingleProductPage';
import SingleCategoryPage from './pages/SingleCategoryPage';
import AuthPage from './pages/AuthPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems;
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const toggleWishlist = (item) => {
    setWishlistItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.filter(i => i.id !== item.id);
      }
      return [...prevItems, item];
    });
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <MainLayout cartItems={cartItems} wishlistItems={wishlistItems} isAuthenticated={isAuthenticated} onLogout={logout}>
        <Routes>
          <Route path="/" element={<HomePage addToWishlist={toggleWishlist} wishlistItems={wishlistItems} cartItems={cartItems} />} />
          <Route path="/products" element={<ProductsPage addToCart={addToCart} addToWishlist={toggleWishlist} wishlistItems={wishlistItems} cartItems={cartItems} />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route 
            path="/product/:id" 
            element={
              <SingleProductPage 
                addToCart={addToCart} 
                addToWishlist={toggleWishlist} 
                isAuthenticated={isAuthenticated}
                wishlistItems={wishlistItems}
                cartItems={cartItems}
              />
            } 
          />
          <Route 
            path="/category/:category" 
            element={
              <SingleCategoryPage 
                addToCart={addToCart}
                addToWishlist={toggleWishlist} 
                wishlistItems={wishlistItems}
                cartItems={cartItems}
              />
            } 
          />
          <Route 
            path="/category/:category/:subcategory" 
            element={
              <SingleCategoryPage 
                addToCart={addToCart}
                addToWishlist={toggleWishlist} 
                wishlistItems={wishlistItems}
                cartItems={cartItems}
              />
            } 
          />
          <Route path="/auth" element={<AuthPage onLogin={login} />} />
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cartItems={cartItems} 
                removeFromCart={removeFromCart} 
                isAuthenticated={isAuthenticated}
              />
            } 
          />
          <Route 
            path="/wishlist" 
            element={
              <WishlistPage 
                wishlistItems={wishlistItems} 
                removeFromWishlist={toggleWishlist} 
                addToCart={addToCart}
                isAuthenticated={isAuthenticated}
              />
            } 
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

