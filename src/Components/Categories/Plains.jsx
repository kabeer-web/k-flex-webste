import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Plains.css';

const Plains = ({ products }) => {
  // Filter to exclude Polo T-shirts
  const nonPoloProducts = products.filter(product => !product.name.toLowerCase().includes('polo'));

  return (
    <div className="plains-products">
      <Container className="mt-5">
        <div className="hero-section">
          <h1 className="heading">Non-Polo T-Shirts Collection</h1>
          <p className="hero-text">Explore our unique collection of plain and graphic tees!</p>
        </div>

        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 mt-4">
          {nonPoloProducts.map((product) => (
            <Col key={product.id} className="mb-4">
              <Link to={`/product/${product.id}`} className="card">
                <div className="card-image-container">
                  <img src={product.image} alt={product.name} className="card-image" />
                </div>
                <h2 className="card-title">{product.name}</h2>
                {product.regularPrice && (
                  <p className="card-regular-price">
                    Regular Price: PKR {product.regularPrice}
                  </p>
                )}
                <h5 className="card-sale-price">
                  Sale Price: <strong>PKR {product.salePrice}</strong>
                </h5>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Plains;
