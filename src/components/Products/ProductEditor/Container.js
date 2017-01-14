/**
 * Created by Paweł Kaczmarek on 2016-12-02.
 */

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import ProductEditor from './Component'
import {addProduct,removeProduct} from '../../../reducers/products/actions'

const mapStateToProps = (state, ownProps) => ({
	initialValues: state.products.find(p => p.code === ownProps.params.code) || {}
})

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		addProduct,
		removeProduct
	}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductEditor);