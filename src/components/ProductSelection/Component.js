import React, { PropTypes } from 'react';
import AddProductButton from './AddProductButton';
import './Component.css';

const ProductSelection = ({ products, addToBasket }) => (
  <div className="product-selection">
    { 
      products.map((p, idx) => (
        <AddProductButton
          key={idx}
          onClick={() => addToBasket({ productCode: p.code })}
          title={p.name}
        />
      ))
    }
  </div>
);

ProductSelection.propTypes = {
	addToBasket: PropTypes.func.isRequired,
};

export default ProductSelection;
