import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { products } from '../Product'; // Import product data
import '../Categories/Polo.css'; // Corrected relative path

function Polo() {
  // Filter products to include Polo shirts (you can now include ID 20 explicitly)
  const filteredProducts = products.filter(product => 
    (product.id >= 1 && product.id <= 8) || product.id === 20
  );

  return (
    <div>
      <h1 className="heading">POLO T-Shirt Collection</h1>
      <div className="card-container">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="card"> {/* Use Link for navigation */}
            <img src={product.image} alt={product.name} className="card-image" />
            <h2>{product.name}</h2>
            <p>Regular Price: PKR {product.regularPrice}</p>
            <p>Sale Price: <strong>PKR {product.salePrice}</strong></p>
            <p>Save PKR {product.regularPrice - product.salePrice}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Polo;
