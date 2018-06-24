import { combineReducers } from 'redux';
import { reducer as FormReducer}  from 'redux-form';
import eventReducer from '../../features/events/eventReducer';
import modalsReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';

const rootReducer = combineReducers({
    events: eventReducer,
    form: FormReducer,
    modals: modalsReducer,
    auth: authReducer
});

export default rootReducer;
