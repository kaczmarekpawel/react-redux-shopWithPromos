/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */
import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from './actionTypes'

export const addToBasket = ({productCode}) => ({
	type: ADD_TO_BASKET,
	productCode
});

export const removeFromBasket = ({idx}) => ({
	type: REMOVE_FROM_BASKET,
	idx
});
