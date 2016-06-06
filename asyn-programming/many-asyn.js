/**
 * Created by fengjj on 2016/6/6.
 */
'use strict';
let events = require('events');
let EventEmitter = events.EventEmitter;
let proxy = new EventEmitter();
let status = 'ready';
let n = 0;
proxy.setMaxListeners(0);
function  select(callback) {
    proxy.once('selected',(data) => {
        callback(data);
    });
    if(status === 'ready'){
        status = 'pending';
        setTimeout(() => {
            status = 'ready';
            proxy.emit('selected','hello word');
        },10000)
    }
}
for(let i = 0;i < 20; i++){
    console.log(i);
    select((data) => {
        console.log(data,n++);
    });
}
setTimeout(() => {
    select((data) => {
        console.log(data,new Date(),'2');
    });
},20000)
