import React, {PropTypes} from 'react';
import { Row, Col } from 'react-bootstrap';
import formatCurrency from '../../formatCurrency';
import './Component.css';


const BasketItems = ({basketProducts, removeFromBasket}) => (
	<div>
		{
			basketProducts.map((product, idx) => (
				<Row key={idx}>
					<Col sm={1}>
						<button className="app__product-remove"
								onClick={() => removeFromBasket({idx})}
						>X</button>
					</Col>
					<Col sm={3} className="app__basket-items__name">{product.code}</Col>
					<Col sm={2} className="app__basket-items__value">{formatCurrency(product.price)}</Col>
					<Col sm={6} className="app__basket-active__promo">{product.promo}</Col>
				</Row>
			))
		}
	</div>
);

BasketItems.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		code: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		promo: PropTypes.string
	})),
	removeFromBasket: PropTypes.func.isRequired
};

export default BasketItems;
