import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import persistState from 'redux-localstorage';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './build/reducers/index';

import entries from './build/data/entries';
import parks from './build/data/parkData';

const initialState = {
	entries,
	parks
};

const enhancers = compose(
	applyMiddleware(thunkMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f,
	persistState()
);

const store = createStore(rootReducer, initialState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
