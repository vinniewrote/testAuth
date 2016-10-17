// webpack less
import './build/less/styles.less';

import 'babel-polyfill';

// react
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store, { history } from './store';

// app container
import App from './build/components/App';
import Layout from './build/components/Layout';
import Discover from './build/components/Discover';
import Parks from './build/components/Parks';
import Journal from './build/components/Journal';
import Details from './build/components/Details';
import Profile from './build/components/Profile';
// render app
ReactDOM.render(
	<Provider store={store}>
			<Router history={history}>
				<Route path='/' component={Layout}>
					<IndexRoute component={Discover}></IndexRoute>
					<Route path='/parks' component={Parks}></Route>
		    </Route>
			</Router>
	</Provider>, document.getElementById('app')
);
