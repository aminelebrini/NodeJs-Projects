const http = require('http');
const date = require('./index2');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('The date of today is: ' + date.getDate());
    res.end();
}).listen(8080);

console.log('Server running at http://localhost:8080/');
