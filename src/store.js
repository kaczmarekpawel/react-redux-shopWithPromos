/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */
import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {routerReducer} from 'react-router-redux'
import basketReducers from './reducers/basket/reducers'
import promosReducer from './reducers/promos/reducers'
import productReducers from './reducers/products/reducers'



let reducers = combineReducers({
	form: formReducer,
	routing: routerReducer,
	promos: promosReducer,
	basket: basketReducers,
	products: productReducers
});


export default createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk))
