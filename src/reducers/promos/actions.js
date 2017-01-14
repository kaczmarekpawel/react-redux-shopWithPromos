/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */
import {ADD_PROMO, REMOVE_PROMO, UPDATE_PROMO} from './actionTypes'
import {browserHistory} from 'react-router'

var promoId = 10;

export const removePromo = id => dispatch => {
	dispatch({
		type: REMOVE_PROMO,
		id
	});
	browserHistory.push('/promos');
};

export const updatePromo = ({promo}) => dispatch => {
	setTimeout(() => {
		dispatch({
			type: UPDATE_PROMO,
			promo
		})
	}, 0);
};

export const createPromo = ({promo}) => dispatch => {
	setTimeout(() => {
		promo.id = promoId++;
		dispatch({
			type: ADD_PROMO,
			promo
		});
		browserHistory.push('/promos');
	},0)
};

