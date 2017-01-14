/**
 * Created by Paweł Kaczmarek on 2016-12-02.
 */

import React from 'react';
import {ReduxFieldGroup} from '../../FieldGroup';
import {reduxForm} from 'redux-form';

const validate = values => {
	const errors = {};
	if (!values.name)
		errors.name = 'Required'
	else if (values.name.length < 1)
		errors.name = 'Name to short'

	if (!values.code)
		errors.code = 'Required'
	else if (values.code.length > 10)
		errors.code = 'Code to long (max 10 characters)'

	if (!values.value)
		errors.value = 'Required'
	else if (values.value <= 0)
		errors.value = 'Value must be larger than 0'

	return errors;
}

let ProductEditor = ({product, addProduct, removeProduct, handleSubmit, ...props}) => (
	<form onSubmit={handleSubmit(values => addProduct(values))}>
		<ReduxFieldGroup
			name="name"
			label="Product name"
			placeholder="Name"
			type="text"
		/>
		<ReduxFieldGroup
			name="code"
			label="Product code"
			placeholder="Unique code"
			type="text"
		/>
		<ReduxFieldGroup
			name="value"
			label="Product value"
			placeholder="value"
			type="number"
		/>

		<button type="submit" disabled={props.submitting || props.invalid}>Create</button>
	</form>
)


export default reduxForm({
	form: 'productEditor',
	enableReinitialize: true,
	validate
})(ProductEditor)
