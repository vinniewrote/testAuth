import fetch from 'isomorphic-fetch';
import { to_json } from 'xmljson';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const TOGGLE_GAME = 'TOGGLE_GAME';
export const TOGGLE_VIEW = 'TOGGLE_VIEW';

const requestData = () => {
	return {
		type: REQUEST_DATA
	}
};

const receiveData = json => {
	return {
		type: RECEIVE_DATA,
		data: json
	}
};

const updateData = json => {
	let obj = {};
	let games = json.ss.gms.g;
	obj.w = json.ss.gms.$.w;
	obj.gms = [];
	for (let p in games) {
		obj.gms.push(games[p].$);
	}
	return obj;
};

export const fetchData = () => {
	return function (dispatch) {
		let url = 'http://www.nfl.com/liveupdate/scorestrip/ss.xml?random=' + new Date().getTime();
		dispatch(requestData());
		return fetch(url)
			.then(response => response.text())
			.then(response => {
				let jsonData;
				to_json(response, function (error, data) {
					jsonData = data;
				});
				return updateData(jsonData);
			})
			.then(response => dispatch(receiveData(response)))
	}
};

export const toggleGame = eid => {
	return {
		type: TOGGLE_GAME,
		eid
	}
};

export const toggleView = () => {
	return {
		type: TOGGLE_VIEW
	}
};
