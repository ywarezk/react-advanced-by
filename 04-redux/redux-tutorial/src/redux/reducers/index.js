import {combineReducers} from 'redux';
import helloReducer from './hello.reducer';
import todoReducer from './todo.reducer';

const unitedReducer = combineReducers({
    hello: helloReducer,
    todo: todoReducer
});

export default unitedReducer;