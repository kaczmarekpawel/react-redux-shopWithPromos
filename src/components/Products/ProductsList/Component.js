/**
 * Created by Paweł Kaczmarek on 2016-12-02.
 */

import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap';

const ProductsList = ({products}) => (
	<div>
		<LinkContainer to="/products/create">
			<Button>Create new Products</Button>
		</LinkContainer>
		<ul>
			{
				products.map((p) => (
					<li key={p.code}>
						<Link to={"/products/edit/" + p.code}>{p.name}</Link>
					</li>
				))
			}
		</ul>
	</div>
);

export default ProductsList;