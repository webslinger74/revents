import { combineReducers } from 'redux';
import eventReducer from '../../features/events/eventReducer';

const rootReducer = combineReducers({
    events: eventReducer
});

export default rootReducer;