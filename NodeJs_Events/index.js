var events = require('events');
var eventEmitter = new events();

eventEmitter.on('res', ()=>{
    console.log('here we go');
});

eventEmitter.emit('res');