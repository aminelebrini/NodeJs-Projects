var fs = require('fs');

fs.readFile('./nodejsFs.txt', 'utf8', (err,data)=>{
    if(err) throw err;
    console.log('File content : ' + data);
});