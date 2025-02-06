var fs = require('fs');

fs.rename('./nodejsFs.txt', 'NodeJs.txt', (err)=>{
    if(err) throw err;
    console.log('File Renamed !')
});