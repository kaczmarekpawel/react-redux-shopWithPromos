/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */
import React from 'react'
import {Nav, Navbar, NavItem} from 'react-bootstrap'

import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

const Menu = ({children}) => (
	<div>
		<Navbar inverse className="App-Menu">
			<Navbar.Header>
				<Navbar.Brand>
					<a href="#">Sample Shop</a>
				</Navbar.Brand>

				<Navbar.Toggle />
			</Navbar.Header>

			<Navbar.Collapse>
				<Nav>
					<IndexLinkContainer to={'/'}>
						<NavItem eventKey={0} href="#">Shop</NavItem>
					</IndexLinkContainer>

					<LinkContainer to={'/products'}>
						<NavItem eventKey={1} href="#">Products</NavItem>
					</LinkContainer>

					<LinkContainer to={'/promos'}>
						<NavItem eventKey={2} href="#">Promotions</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		{children}
	</div>
);

export default Menu;