import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './All.css';

const All = ({ products }) => {
  return (
    <div className="all-products">
      <Container>
        <div className="hero-section text-center">
          <h1 className="heading">🚀 ALL PRODUCTS</h1>
          <p className="subtext">Top picks curated just for you. Tap your style.</p>
        </div>

        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map((product) => {
            const save = product.regularPrice - product.salePrice;
            const discount = Math.round((save / product.regularPrice) * 100);

            return (
              <Col key={product.id}>
                <Link to={`/product/${product.id}`} className="ultra-product-card">
                  {discount > 0 && <div className="ultra-discount-badge">{discount}% OFF</div>}
                  <div className="ultra-image-wrapper">
                    <img src={product.image} alt={product.name} className="ultra-image" />
                  </div>
                  <div className="ultra-info">
                    <h5 className="ultra-title">{product.name}</h5>
                    <p className="ultra-price">
                      <span className="regular">PKR {product.regularPrice}</span>
                      <span className="sale">PKR {product.salePrice}</span>
                    </p>
                    <p className="ultra-save">💸 Save PKR {save}</p>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default All;
