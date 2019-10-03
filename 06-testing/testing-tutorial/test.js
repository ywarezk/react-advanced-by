


var requireTest = require.context('./src', true, /\.test\.js$/);
requireTest.keys().forEach(requireTest);