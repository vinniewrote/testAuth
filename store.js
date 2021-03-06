import { createStore, compose, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './build/reducers/index';

const initialState = {};

const enhancers = compose(
	applyMiddleware(thunkMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f,
	persistState()
);

const store = createStore(rootReducer, initialState, enhancers);

export default store;
