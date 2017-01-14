import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import ProductSelection from './ProductSelection';
import Basket from './Basket';
import './App.css';


class App extends Component {
	render() {
		return (
			<Grid fluid={true}>
				<Row>
					<Col sm={3}>
						<Panel><Basket/></Panel>
					</Col>
					<Col sm={9}>
						<Panel>
							<p className="app-intro">
								Select Products to add to your basket
							</p>
							<ProductSelection />
						</Panel>
					</Col>

				</Row>
				{this.props.children}
			</Grid>
		);
	}
}

export default App;
