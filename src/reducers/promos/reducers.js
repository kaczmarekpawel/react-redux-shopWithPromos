/**
* Created by Paweł Kaczmarek on 2016-11-27.
*/

import {ADD_PROMO, REMOVE_PROMO, UPDATE_PROMO} from './actionTypes'
import {getProductBasePrice} from '../products/selectors'

const isProductInProductsList = (productCode, productList) => {
	return productList.find(p => p === '*') || productList.find(p => p === productCode);
};

const getPromoPriceFunction = formula => (
	(product, basket) => (
		((BASEPRICE) => (eval(formula)))(getProductBasePrice(product.code))
	)
);

const getPromoApplicabilityFunction = ({minimumNumberOf, everyNth}) => (
	(product, basket) => {
		let res = true;
		if (minimumNumberOf)
			res &= basket.filter(i => i.code === product.code).length >= minimumNumberOf;
		if (everyNth)
			res &= (basket.filter(i => i.code === product.code).indexOf(product) + 1) % everyNth === 0;
		return res;
	}
);


const createPromo = ({
	id,
	name,
	applicableProducts = [],
	priceFormula = '',
	productsApplicability = {},
}) => ({
	id,
	name,
	applicableProducts,
	priceFormula,
	productsApplicability,
	isApplicable: (product, basket) => (
		isProductInProductsList(product.code, applicableProducts)
			&& getPromoApplicabilityFunction(productsApplicability)(product, basket)
	),
	getPromoPrice: getPromoPriceFunction('BASEPRICE' + priceFormula)
});

const initialState = [
	createPromo({
		id: 1,
		name: 'Powyżej trzech taniej!',
		applicableProducts: ['HRBLPT'],
		priceFormula: '- 0.5',
		productsApplicability: {everyNth:0, minimumNumberOf: 3}
	}),
	createPromo({
		id: 2,
		name: 'Drugi za darmo',
		applicableProducts: ['KAW'],
		priceFormula: '* 0',
		productsApplicability: {minimumNumberOf:0, everyNth: 2}
	})
];



const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PROMO:
			return [...state, createPromo(action.promo)];
		case REMOVE_PROMO:
			return state.filter(p => p.id !== action.id);
		case UPDATE_PROMO:
			return [
				...state.filter(p => p.id !== action.promo.id),
				createPromo(action.promo)
			];
		default:
			return state;
	}
};

export default reducer;