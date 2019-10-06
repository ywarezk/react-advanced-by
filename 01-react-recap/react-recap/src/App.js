import React from 'react';
import './App.css';
import PninitHello, {stam, stamArray} from './components/Hello'
import Todo from './components/Todo';
// import Todo from './components/TodoFunc';

function App() {
  return (
    <div className="App">
      <Todo />
      <PninitHello message={'hello from prop'} stamArr={ [1,2,3] } stamObj={ {foo: 'bar'} } lurem="ipsum" />
    </div>
  );
}

export default App;
