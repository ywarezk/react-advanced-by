import {SET_MESSAGE} from '../actions/hello.actions';

const initialState = {
    message: 'initial message from state2'
}

export default function helloReducer(state = initialState, action) {
    switch(action.type) {
        case SET_MESSAGE:
            return {...state, message: action.payload}
        default:
            return state;
    }
}