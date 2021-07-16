import { combineReducers } from 'redux';

// import all reducers here
import exchangeReducers from './reducers.js';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  octo: exchangeReducers,
});

// make the combined reducers available for import
export default reducers;
