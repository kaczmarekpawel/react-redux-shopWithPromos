/**
 * Created by Paweł Kaczmarek on 2016-11-26.
 */

import {connect} from 'react-redux'
import Basket from './Component';
import {getBasketProducts} from '../../reducers/basket/selectors';

const mapStateToProps = (state) => ({
	basketProducts: getBasketProducts(state)
});

export default connect(mapStateToProps)(Basket);