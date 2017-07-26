import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Web3Reducer from './reducer_web3';

const rootReducer = combineReducers({
  form: formReducer,
  web3: Web3Reducer
});

export default rootReducer;
