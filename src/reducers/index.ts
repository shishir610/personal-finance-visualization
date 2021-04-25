import { combineReducers } from 'redux';
import incomeReducer from './incomeReducer'

export default combineReducers({
	income: incomeReducer
});
