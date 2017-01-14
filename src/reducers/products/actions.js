/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */
import {ADD_PRODUCT, REMOVE_PRODUCT} from './actionTypes'

export const addProduct = (product) => dispatch => {
	window.setTimeout(() => {
		dispatch({
			type: ADD_PRODUCT,
			product
		})
	}, 800);
};

export const removeProduct = ({idx}) => dispatch => {
	window.setTimeout(() => {
		dispatch({
			type: REMOVE_PRODUCT,
			idx
		})
	}, 800);
};
