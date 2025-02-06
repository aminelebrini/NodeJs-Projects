var url = require('url');
const URL = 'http://localhost:8080/default.htm?user=amine&lastname=lebrini';
var q = url.parse(URL,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q.query);