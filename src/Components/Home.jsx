import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import bannerImage from './images/banner-image.png';

const Home = ({ products }) => {
  const productsSectionRef = useRef(null);

  const handleScrollToProducts = () => {
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const limitedProducts = products.slice(0, 4);

  return (
    <div className="hero-container">
      {/* ✅ Hero Section */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img src={bannerImage} alt="K-Flex Banner" className="hero-banner-img" />
        </div>
      </section>

      {/* 🔥 Products */}
      <section className="products-container" ref={productsSectionRef}>
        <h2 className="section-heading">🔥 Hot Drops</h2>
        <div className="row gx-4 gy-4 justify-content-center px-3">
          {limitedProducts.map((product) => (
            <div className="col-md-3 col-sm-6" key={product.id}>
              <Link to={`/product/${product.id}`} className="product-link">
                <div className="product-card">
                  <div className="card-image">
                    <img src={product.image} alt={product.name} />
                    <span className="discount-badge">
                      -{Math.floor(Math.random() * 30 + 10)}%
                    </span>
                    <span className="hot-tag">🔥 Hot Drop</span>
                  </div>
                  <div className="product-info text-center p-3">
                    <h5 className="product-title">{product.name}</h5>
                    <div className="price-info">
                      <p className="regular-price">PKR {product.price + 400}</p>
                      <p className="sale-price">PKR {product.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link to="/categories/all">
            <button className="more-products-btn">More T-Shirts →</button>
          </Link>
        </div>
      </section>

      {/* ✅ WhatsApp Button */}
      <a
        href="https://wa.me/923222301920"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default Home;
