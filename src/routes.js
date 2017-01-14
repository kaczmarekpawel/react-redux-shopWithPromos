/**
 * Created by Paweł Kaczmarek on 2016-11-27.
 */

import Menu from './components/Menu';
import App from './components/App';
import Promos from './components/Promos';
import Products from './components/Products';
import PromoEditor from './components/PromoEditor';
import ProductEditor from './components/Products/ProductEditor'

const routes = {
	path: '/',
	component: Menu,
	indexRoute: {component: App},
	childRoutes: [
		{
			path: 'promos',
			component: Promos,
			childRoutes: [
				{path: 'edit/:id', component: PromoEditor},
				{path: 'create', component: PromoEditor}
			]
		},
		{
			path: 'products',
			component: Products,
			childRoutes: [
				{path: 'edit/:code', component: ProductEditor},
				{path: 'create', component: ProductEditor}
			]
		}
	]
};

export default routes;