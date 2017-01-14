/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */

import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap';

const PromosList = ({promos}) => (
	<div>
		<LinkContainer to="/promos/create">
			<Button>Create new Promo</Button>
		</LinkContainer>
		<ul>
			{
				promos.map((p) => (
					<li key={p.id}><Link to={"/promos/edit/" + p.id}>{p.name}</Link></li>
				))
			}
		</ul>
	</div>
);


export default PromosList;
