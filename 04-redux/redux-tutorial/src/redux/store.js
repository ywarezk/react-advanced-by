import { createStore } from 'redux';

const store = createStore(state => state, { message: 'initial value from redux'});

export default store;