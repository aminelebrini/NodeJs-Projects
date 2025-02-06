var fs = require('fs');

fs.writeFile('nodejsFs.txt', 'HELLO NODE JS', (err) =>{
    if(err) throw err;
    console.log('File created and content written!');
});