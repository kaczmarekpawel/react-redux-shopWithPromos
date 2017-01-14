/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */

import React from 'react'
import {Grid, Row, Col, Panel} from 'react-bootstrap'
import PromosList from '../PromosList'
import Basket from '../Basket'

const Promos = ({children}) => (
	<Grid fluid={true}>
		<Row>
			<Col sm={3}>
				<Panel><PromosList/></Panel>
				<Panel><Basket/></Panel>
			</Col>
			<Col sm={9}>
				{children}
			</Col>
		</Row>
	</Grid>
);

export default Promos;