import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import ourStore from './redux/store';
import StrogerRecieveMessage from './components/RecieveMessage';

function App() {
  return (
    <div className="App">
      <Provider store={ourStore}>
        <StrogerRecieveMessage />
      </Provider>
    </div>
  );
}

export default App;
