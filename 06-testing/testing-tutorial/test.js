import 'babel-polyfill';
import './src/index.css';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

var requireTest = require.context('./src', true, /\.test\.js$/);
requireTest.keys().forEach(requireTest);