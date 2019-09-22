import React from 'react';
import './App.css';
// import Login from './components/Login';
import LoginControlled from './components/LoginControlled';
import img from './jerusalem.jpg';
import LoginFormik from './components/LoginFormik';

function App() {
  return (
    <div className="App">
      <LoginControlled />

      <img src={img} alt="jerusalem" />
      <LoginFormik />
    </div>
  );
}

export default App;
