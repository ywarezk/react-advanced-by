import { SET_TASKS, SET_IS_LOADING } from '../actions/todo.actions';
import { keyBy } from 'lodash';

const initialState = {
    tasks: {},
    isLoading: false
}

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case SET_TASKS:
            return {...state, tasks: keyBy(action.payload, (singleTask) => {
                return singleTask.id;
            })}
        case SET_IS_LOADING: 
            return {...state, isLoading: action.payload}
        default:
            return state;
    }
}