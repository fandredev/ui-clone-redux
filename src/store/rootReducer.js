import { combineReducers } from 'redux'
import landingReducer from './landing/reducer'

export default combineReducers({
  landing: landingReducer,
});
