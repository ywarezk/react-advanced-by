import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, HashRouter, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import Error404 from './components/Error404';
import Todo from './components/Todo';

const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <nav>
          <ul>
            <li>
              <Link to="/">homepage</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </nav>


        <Suspense fallback={<h1>loading...</h1>}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={LazyAbout} />
            <Route path="/todo/:todoId" component={Todo} />
            <Route path="**" component={Error404} />
          </Switch>
        </Suspense>
        
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
