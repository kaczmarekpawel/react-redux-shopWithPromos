/**
 * Created by Paweł Kaczmarek on 2016-11-26.
 */
import {connect} from 'react-redux'
import PromoEditor from './Component';
import {bindActionCreators} from 'redux';
import {getEmptyPromo} from '../../reducers/promos/selectors';
import {createPromo, removePromo, updatePromo} from '../../reducers/promos/actions';

const mapStateToProps = (state, ownProps) => ({
	promo: state.promos.find(p => p.id === Number.parseInt(ownProps.params.id, 10)) || getEmptyPromo(),
	productCodes: state.products.map(p => p.code).concat(['*'])
});


const mapDispatchToProps = (dispatch) => (
	bindActionCreators({
		createPromo,
		removePromo,
		updatePromo
	}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(PromoEditor);