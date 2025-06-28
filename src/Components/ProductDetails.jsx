import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import './ProductDetails.css';

const ProductDetails = ({ products, addToCart, addToWishlist, wishlistItems = [] }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState('');
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const shippingFee = 200;

  useEffect(() => {
    const isWishlist = wishlistItems.some(item => item.id === product?.id);
    setIsInWishlist(isWishlist);
  }, [wishlistItems, product]);

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (product.showSizeOptions && !selectedSize) {
      showPopup('Please select a size before adding to the cart.');
    } else {
      addToCart({ ...product, selectedSize });
      showPopup('Added to cart!');
    }
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) {
      showPopup('Removed from wishlist!');
    } else {
      addToWishlist(product);
      showPopup('Added to wishlist!');
    }
    setIsInWishlist(!isInWishlist);
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => setPopupMessage(''), 3000);
  };

  return (
    <div className="product-details-container">
      <h1 className="product-title">{product.name || 'Product Name Not Available'}</h1>
      <img className="product-image" src={product.image || '/default-image.png'} alt={product.name} />
      <p className="product-description">{product.description || 'No description available.'}</p>
      <p className="product-price">
        Price: ₹{product.price} <br />
        Shipping Fee: ₹{shippingFee} <br />
        <strong>Total: ₹{product.price + shippingFee}</strong>
      </p>

      {product.showSizeOptions && (
        <div className="size-options">
          <h3>Select Size:</h3>
          {['M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              className={`size-button ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
      )}

      <div className="button-container">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          <FaShoppingCart /> Add to Cart
        </button>
        <button
          className={`add-to-wishlist-button ${isInWishlist ? 'active' : ''}`}
          onClick={handleAddToWishlist}
        >
          <FaHeart className={`heart-icon ${isInWishlist ? 'active' : ''}`} />
          {isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
        </button>
      </div>

      {popupMessage && <div className="popup">{popupMessage}</div>}
    </div>
  );
};

export default ProductDetails;
