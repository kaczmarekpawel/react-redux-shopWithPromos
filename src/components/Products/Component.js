/**
 * Created by Paweł Kaczmarek on 2016-12-02.
 */

import React from 'react'
import {Grid, Row, Col, Panel} from 'react-bootstrap'
import ProductsList from './ProductsList'

const Products = ({children}) => (
	<Grid fluid={true}>
		<Row>
			<Col sm={3}>
				<Panel><ProductsList/></Panel>
			</Col>
			<Col sm={9}>
				{children}
			</Col>
		</Row>
	</Grid>
);

export default Products;