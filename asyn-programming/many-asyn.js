/**
 * Created by fengjj on 2016/6/6.
 */
'use strict';
let events = require('events');
let EventEmitter = events.EventEmitter;
let fs = require('fs');
let count = 0;
let result = {};
function done(key,data) {
    result[key] = data.toString();
    count++;
    if(count === 2) {
        console.log('load success');
        for(let k in result) {
            console.log('=======',k,'=======');
            console.log(result[k],count);
            console.log('=======end=======');
        }
    }
}
fs.readFile('./inherits-events.js',(err,data) => {
    done('a',data);
});
fs.readFile('./avalanche-question.js',(err,data) => {
    done('b',data);
});

