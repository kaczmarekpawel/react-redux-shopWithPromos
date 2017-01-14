/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */
import React from 'react';
import {Field} from 'redux-form';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';


const renderFormControl = ({input, meta: {touched, error}}) => (
	<div>
		<FormControl {...input} />
		{touched && error && <span>{error}</span>}
	</div>
)

export const FieldGroup = ({ id, label, ...props }) => (
	<FormGroup controlId={id}>
		<ControlLabel>{label}</ControlLabel>
		<FormControl {...props} />
	</FormGroup>
)

export const ReduxFieldGroup = ({id, label, name, type, ...props}) => (
	<FormGroup controlId={id}>
		<ControlLabel>{label}</ControlLabel>
		<Field component={renderFormControl}
			   value={props.value}
			   name={name}
			   type={type}/>
	</FormGroup>
)

