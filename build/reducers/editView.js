import { TOGGLE_VIEW } from '../actions/actionCreators';

function editView(state = false, action) {
	switch (action.type) {
		case TOGGLE_VIEW:
			return !state;
		default:
			return state;
	}
}
export default editView;
