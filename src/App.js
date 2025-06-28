import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

import NavBar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import MyOrders from './Components/MyOrders';
import ProductDetails from './Components/ProductDetails';
import Wishlist from './Components/Wishlist';
import Footer from './Components/Footer';
import { products } from './Components/Product';

import All from './Components/Categories/All';
import Plains from './Components/Categories/Plains';
import Customprint from './Components/Categories/Customprint';
import Printed from './Components/Categories/Printed';
import Polo from './Components/Categories/Polo';

const App = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');

  const plainsProducts = products.filter(product => [15, 16, 17, 18, 19].includes(product.id));
  const userId = 'sampleUserId';

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => {
      if (!prevItems.find((item) => item.id === product.id)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Helmet>
        <title>K-Flex - Premium T-Shirts for Boys</title>
        <meta name="description" content="Shop K-Flex for high-quality, stylish t-shirts in Plains, Printed, Polo & Custom categories. Exclusive discounts available now!" />
        <meta name="keywords" content="K-Flex, premium t-shirts, printed shirts, plains, polo, custom print, fashion Pakistan" />
        <meta name="author" content="K-Flex PK" />
      </Helmet>

      <div className="app-container">
        <div style={{
          backgroundColor: '#feb500',
          color: '#000',
          padding: '10px 0',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '1rem',
          position: 'fixed',
          top: '0',
          width: '100%',
          zIndex: '1000'
        }}>
          🎉 BUY 4 GET 2 FREE || BUY 6 GET 3 FREE . 🎉
        </div>

        <div className="main-content" style={{ paddingTop: '50px' }}>
          <NavBar cartCount={cartItems.length} />
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home products={products} addToWishlist={addToWishlist} addToCart={addToCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
              <Route path="/myorders" element={<MyOrders cartItems={cartItems} />} />
              <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} addToWishlist={addToWishlist} wishlistItems={wishlistItems} />} />
              <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />} />
              <Route path="/categories/all" element={<All category="all" products={products} addToWishlist={addToWishlist} />} />
              <Route path="/categories/plains" element={<Plains category="Plains" products={plainsProducts} addToWishlist={addToWishlist} />} />
              <Route path="/categories/printed" element={<Printed category="Printed" products={products.filter(p => p.name.includes('Printed'))} addToWishlist={addToWishlist} />} />
              <Route path="/categories/polo" element={<Polo />} />
              <Route path="/categories/custom-print" element={<Customprint category="Custom Print" products={products.filter(p => p.name.includes('Graphic'))} addToWishlist={addToWishlist} />} />
            </Routes>
          </div>
          <Footer />
        </div>

        {/* ✅ WhatsApp Floating Chatbox */}
        <>
          {/* Floating Button */}
          <div
            onClick={() => setShowChat(!showChat)}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              backgroundColor: '#25D366',
              borderRadius: '50%',
              padding: '14px',
              cursor: 'pointer',
              zIndex: 9999,
              animation: 'glowPulse 1.6s infinite alternate',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              style={{ width: '28px', height: '28px' }}
            />
          </div>

          {/* Chat Popup */}
          {showChat && (
            <div
              style={{
                position: 'fixed',
                bottom: '90px',
                right: '20px',
                width: '260px',
                backgroundColor: '#fff',
                border: '2px solid #feb500',
                borderRadius: '15px',
                padding: '15px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                zIndex: 9999,
              }}
            >
              <h5 style={{ color: '#feb500', marginBottom: '10px', fontWeight: 'bold' }}>Chat with K-Flex</h5>
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                }}
              />
              <Button
                onClick={() => {
                  window.open(`https://wa.me/923222301920?text=${encodeURIComponent(message)}`, '_blank');
                  setShowChat(false);
                  setMessage('');
                }}
                style={{
                  width: '100%',
                  backgroundColor: '#feb500',
                  color: '#000',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '8px',
                }}
              >
                Send on WhatsApp
              </Button>
            </div>
          )}

          {/* Animation */}
          <style>{`
            @keyframes glowPulse {
              from { box-shadow: 0 0 10px #25D366; }
              to { box-shadow: 0 0 20px #25D366, 0 0 30px #feb500; }
            }
          `}</style>
        </>
      </div>
    </Router>
  );
};

export default App;
