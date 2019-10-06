const server = require('./server');
const glob = require('glob');

let serverInstance;

before(function(done) {
    serverInstance = server.listen(3001, function() {
        console.log('listenning...');
        done();
    });
});

const files = glob.sync('e2e/*.e2e.js');
console.log(files);
for (let file of files) {
    require('./' + file);
}

after(function() {
    serverInstance.close();
});





