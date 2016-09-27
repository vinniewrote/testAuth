import { RECEIVE_DATA, TOGGLE_GAME } from '../actions/actionCreators';

function gameData(state = {
	w: 0,
	gms: []
}, action) {
	switch (action.type) {
		case RECEIVE_DATA:
			// new week reset
			if (action.data.w !== state.w) {
				return action.data;
			}
			// update refresh games with updated properties
			const updatedGames = action.data.gms.map((game, i) => {
				let stateGame = state.gms.find(stateGame => stateGame.eid === game.eid);
				if (stateGame) {
					return Object.assign({}, stateGame, game);
				}
				return game;
			});
			return Object.assign({}, action.data, { gms: updatedGames });
		case TOGGLE_GAME:
			let gms = state.gms.map((game, i) => {
				if (game.eid === action.eid) {
					let active = game.active ? false : true;
					if (game.active === undefined) {
						active = false;
					}
					return Object.assign({}, game, {
						active
					});
				}
				return game;
			});
			return Object.assign({}, state, { gms });
		default:
			return state;
	}
}
export default gameData;
