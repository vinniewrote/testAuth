// webpack less
import './build/less/styles.less';

import 'babel-polyfill';

// react
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

// app container
import App from './build/components/App';

// render app
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('app')
);
