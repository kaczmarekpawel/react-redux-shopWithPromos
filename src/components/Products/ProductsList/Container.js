/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */
import {connect} from 'react-redux'
import Products from './Component'

const mapStateToProps = (state) => ({
	products: state.products
});

export default connect(mapStateToProps)(Products)