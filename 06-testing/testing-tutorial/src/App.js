import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';

function App({user}) {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>
          <Route path="/" component={Register} />
          {
            user ? <Route path="/dashboard" component={Dashboard} /> : null
          }
          
        </Switch>
        

      </BrowserRouter>
    </div>
  );
}

export default App;
