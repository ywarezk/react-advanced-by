import { SET_MESSAGE} from './actions';

export default function reducer(state = {message: 'initial message'}, action) {
    switch(action.type) {
        case SET_MESSAGE:
            return {...state, message: action.payload};
        default:
            return state;
    }
} 