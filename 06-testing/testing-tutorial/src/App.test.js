import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { classBody } from '@babel/types';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  document.body.appendChild(div);
  ReactDOM.unmountComponentAtNode(div);
});
