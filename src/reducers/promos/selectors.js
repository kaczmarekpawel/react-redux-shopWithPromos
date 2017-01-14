/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */

import {getProductBasePrice} from '../products/selectors';

const getDefaultPromo = () => ({
	getPromoPrice: (product) => getProductBasePrice(product.code)
});

export const getBestProductPromo = (state, product) => (
	state.promos
		.filter(p => p.isApplicable(product, state.basket))
		.sort((p1, p2) => p1.getPromoPrice(product) - p2.getPromoPrice(product))[0]
	|| getDefaultPromo()
);

export const getEmptyPromo = () => ({
	id: undefined,
	name: '',
	applicableProducts: [],
	priceFormula: '* 1',
	productsApplicability: {
		minimumNumberOf: 0,
		everyNth: 0
	},
});

