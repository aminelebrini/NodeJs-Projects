var fs = require('fs');

fs.appendFile('./nodejsFs.txt', 'I am AMINE LEBRINI , I am Front-End Developer', function(err){
    if(err) throw err;
    console.log('Update !');
});