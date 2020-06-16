import authReducer from './auth';
import cartReducers from './cart';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  auth: authReducer,
  cart: cartReducers
});

export default rootReducers;
