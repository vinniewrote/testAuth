import { combineReducers } from 'redux';

import gameData from './gameData';
import editView from './editView';

const rootReducer = combineReducers({ gameData, editView });

export default rootReducer;
