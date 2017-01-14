/**
 * Created by Paweł Kaczmarek on 2016-11-26.
 */
import React, {Component} from 'react';
import {Form, FormGroup, Button, ControlLabel} from 'react-bootstrap';
import {Multiselect} from 'react-widgets';
import {FieldGroup} from '../FieldGroup';
import {getEmptyPromo} from '../../reducers/promos/selectors'


import 'react-widgets/dist/css/react-widgets.css';

class PromoEditor extends Component {

	constructor() {
		super();
		this.updateRule = this.updateRule.bind(this);
		this.state = getEmptyPromo();
	}

	updateRule(field, value) {
		this.setState({
			productsApplicability: {
				...this.state.productsApplicability,
				[field]: value
			}
		})
	}

	componentWillMount() {
		this.setState(this.props.promo)
	}

	componentWillReceiveProps(nextProps) {
		this.setState(nextProps.promo);
	}

	render() {
		var {
			createPromo,
			removePromo,
			updatePromo,
			productCodes
		} = this.props;

		let promo = this.state;

		return (
			<Form>
				<FormGroup>
					<FieldGroup
						label="Promotion name"
						type="text"
						onChange={ e => this.setState({name: e.target.value})}
						value={promo.name}
						placeholder="Name"/>
					<ControlLabel>Select products included in promotion</ControlLabel>
					<Multiselect
						data={productCodes}
						placeholder="Product codes"
						value={promo.applicableProducts}
						onChange={applicableProducts => this.setState({applicableProducts})}
						multiple/>
					<FieldGroup
						label="Price calculation formula"
						type="text"
						placeholder="Price calculation formula"
						value={promo.priceFormula}
						onChange={ e => this.setState({priceFormula: e.target.value})}/>
					<FieldGroup
						label="Minimum number of products"
						type="number"
						value={promo.productsApplicability.minimumNumberOf}
						placeholder="Minimum number of products to apply promotion"
						onChange={e => this.updateRule('minimumNumberOf', e.target.value)}
					/>

					<FieldGroup
						label="Number of every n'th product to be promoted"
						type="number"
						value={promo.productsApplicability.everyNth}
						placeholder="Number of every n'th product to be promoted"
						onChange={ e => this.updateRule('everyNth', e.target.value)}
					/>

					<Button disabled={promo.id > 0}
							onClick={() => createPromo({promo})}
						>Create promo</Button>
					<Button disabled={!promo.id}
							onClick={() => updatePromo({promo})}>Update promo</Button>
					<Button disabled={!promo.id}
							onClick={() => removePromo(promo.id)}>Remove promo</Button>
				</FormGroup>
			</Form>
		)
	}

}

export default PromoEditor