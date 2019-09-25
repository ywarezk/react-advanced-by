import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import ourStore from './redux/store';
import StrogerRecieveMessage from './components/RecieveMessage';
import SendMessage from './components/SendMessage';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Provider store={ourStore}>
        <StrogerRecieveMessage />

        <SendMessage />

        <h1>Todo list</h1>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
