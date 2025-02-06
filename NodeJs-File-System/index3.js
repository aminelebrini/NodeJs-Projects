var fs = require('fs');

fs.unlink('./nodejsFs.txt', (err)=>{
    if(err) throw err;
    console.log('Deleted !')
});