/**
 * Created by fengjj on 2016/6/6.
 */
'use strict';
let events = require('events');
let EventEmitter = events.EventEmitter;
let status = 'ready';
function  select(callback) {
    if(status === 'ready'){
        status = 'pending';
        setTimeout(() => {
            status = 'ready';
            callback('suc');
        },10000)
    }
}
for(let i = 0;i < 10; i++){
    console.log(i);
    select((data) => {
        console.log(data,new Date(),'1');
    });
}
setTimeout(() => {
    select((data) => {
        console.log(data,new Date(),'2');
    });
},20000)
