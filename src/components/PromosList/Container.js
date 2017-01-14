/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */
import {connect} from 'react-redux'
import PromosList from './Component'

const mapStateToProps = (state) => ({
	promos: state.promos
});

export default connect(mapStateToProps)(PromosList)