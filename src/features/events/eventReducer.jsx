import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENTS } from './eventConstants';

const initialState = [];

 export const createEvent = (state, payload) => {
      return [...state, Object.assign({}, payload.event)];
  }




  export const updateEvent = (state, payload) => {
    return [ ...state.filter(event => event.id !== payload.event.id),
        Object.assign({}, payload.event)
    ]
}

export const deleteEvent = (state, payload) => {
    return [ ...state.filter(event => event.id !== payload.eventId)
    ]
}


export const fetchEvents = (state, payload) => {
    return payload.events
}

export default createReducer(initialState,  {   //this is imported as eventReducer in rootReducer.js as default
    [CREATE_EVENT]: createEvent,
    [UPDATE_EVENT]: updateEvent,
    [DELETE_EVENT]: deleteEvent,
    [FETCH_EVENTS]: fetchEvents

});

//we therefore export the return of this function which is the standard reducer function
// showing at 1st returned function within reducerUtil.js as it is being called 
// however we still have access to the inital state and the fnMap due to it being a closure