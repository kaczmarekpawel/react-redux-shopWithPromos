import BasketItems from './Component';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFromBasket } from '../../reducers/basket/actions';

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({ removeFromBasket }, dispatch)
);

export default connect(null, mapDispatchToProps)(BasketItems);
