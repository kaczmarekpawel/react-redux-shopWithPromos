/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */

import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from './actionTypes'

const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_BASKET:
			return [...state, {code: action.productCode}];
		case REMOVE_FROM_BASKET:
			return state.filter((p, idx) => idx !== action.idx);
		default:
			return state;
	}
};

export default reducer;
