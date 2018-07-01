import { combineReducers } from 'redux';
import { reducer as FormReducer}  from 'redux-form';
import eventReducer from '../../features/events/eventReducer';
import modalsReducer from '../../features/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../../features/async/asyncReducer';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    events: eventReducer,
    form: FormReducer,
    modals: modalsReducer,
    auth: authReducer,
    async: asyncReducer
    
});

export default rootReducer;
