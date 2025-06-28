import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { products } from '../Product'; // Import product data
import './Printed.css'; // Import CSS for styling

function Printed() {
  // Filter products to include only those with IDs from 9 to 14
  const filteredProducts = products.filter(product => product.id >= 9 && product.id <= 14);

  return (
    <div>
      <h1 className="heading">Printed T-Shirt Collection</h1>
      <div className="card-container">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="card"> {/* Use Link for navigation */}
            <img src={product.image} alt={product.name} className="card-image" />
            <h2>{product.name}</h2>
            <p>Regular Price: PKR {product.regularPrice}</p>
            <p>Sale Price: <strong>PKR {product.salePrice}</strong></p>
            <p>
              Save: <span className="save-price">PKR {product.regularPrice - product.salePrice}</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Printed;
