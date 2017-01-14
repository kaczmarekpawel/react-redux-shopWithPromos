/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */

import {ADD_PRODUCT, REMOVE_PRODUCT} from './actionTypes'


const initialState = [
	{code: 'HRBLPT', value: 5.11, name: 'Herbata Lipton'},
	{code: 'OGR', value: 0.45, name: 'Ogórek'},
	{code: 'MLK', value: 3.50, name: 'Mleko'},
	{code: 'KAW', value: 21.00, name: 'Kawa'}
];


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return [...state, action.product];
		case REMOVE_PRODUCT:
			return state.filter((p, idx) => idx !== action.idx);
		default:
			return state;
	}
};

export default reducer;
