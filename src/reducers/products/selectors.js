/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */

import store from '../../store';

const getProduct = (code) => (
	store.getState().products.find(p => p.code === code)
);

export const getProductCodes = () => (
	store.getState().products.map(p => p.code)
);

export const getProductBasePrice = (code) => (
	getProduct(code).value
);
