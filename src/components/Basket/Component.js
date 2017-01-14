/**
 * Created by Paweł Kaczmarek on 2016-11-26.
 */
import React from 'react'
import BasketItems from '../BasketItems'
import BasketTotal from '../BasketTotal'

let calculateTotalPrice = (products) => (
	products.reduce((pre, cur) => (pre += cur.price), 0)
);

const Basket = ({basketProducts}) => (
	<div>
		<BasketTotal total={calculateTotalPrice(basketProducts)}/>
		<BasketItems basketProducts={basketProducts}/>
	</div>
);

export default Basket;
