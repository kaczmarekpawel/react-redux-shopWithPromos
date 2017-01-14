import ProductSelection from './Component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToBasket } from '../../reducers/basket/actions';

const mapStateToProps = (state) => ({
	products: state.products
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
	  addToBasket,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelection);

