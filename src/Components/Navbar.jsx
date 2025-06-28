import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaHeart, FaList, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import logo from './real.png';
import './NavBar.css';

const NavBar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Check login status
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername || '');
  }, [location.pathname]);

  // ✅ Outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ✅ Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername('');
    navigate('/');
  };

  const isLoggedIn = !!username;

  return (
    <>
      <nav className="navbar">
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="logo" />
          <span>K-Flex</span>
        </div>
        <FaBars className="menu-icon" onClick={() => setIsOpen(true)} />
      </nav>

      <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
        <FaTimes className="close-icon" onClick={() => setIsOpen(false)} />
        <ul>
          <li onClick={() => handleNavigate('/')}>Home</li>
          <li onClick={() => handleNavigate('/about')}>About</li>
          <li onClick={() => handleNavigate('/contact')}>Contact</li>
          <li onClick={() => handleNavigate('/categories/all')}>All</li>
          <li onClick={() => handleNavigate('/wishlist')}><FaHeart /> Wishlist</li>
          <li onClick={() => handleNavigate('/myorders')}><FaList /> My Orders</li>
          <li onClick={() => handleNavigate('/cart')}><FaShoppingCart /> Cart ({cartCount})</li>

          {isLoggedIn ? (
            <>
              <li><FaUser /> Welcome, <b>{username}</b></li>
              <li onClick={handleLogout}><FaSignOutAlt /> Logout</li>
            </>
          ) : (
            <>
              <li onClick={() => handleNavigate('/login')}><FaUser /> Login</li>
              <li onClick={() => handleNavigate('/signup')}><FaUser /> Signup</li>
            </>
          )}
        </ul>
      </div>
      {isOpen && <div className="backdrop" />}
    </>
  );
};

export default NavBar;
