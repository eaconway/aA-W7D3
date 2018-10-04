import entitiesReducer from './entities_reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  entities: entitiesReducer
});
export default rootReducer
