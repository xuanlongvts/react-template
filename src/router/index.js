import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from '../components/App';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import Catagories from '../components/Catagories';

import store, { history } from '../stores/index';


const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="/catagories" component={Catagories} />
				<Route path="*" component={NotFound} />
			</Route>
		</Router>
	</Provider>
);

export default router;