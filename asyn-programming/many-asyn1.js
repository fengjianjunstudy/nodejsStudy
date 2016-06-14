/**
 * Created by fengjj on 2016/6/6.
 */
'use strict';
let events = require('events');
let EventEmitter = events.EventEmitter;
let fs = require('fs');
let proxy = new EventEmitter();
function after(times,callback) {
    let count = 0;
    let result = {};
    return function(key,data) {
        result[key] = data.toString();
        count++;
        if(count === times) {
            callback(result);
        }
    }
}

fs.readFile('./inherits-events.js',(err,data) => {
    done('a',data);
});
fs.readFile('./avalanche-question.js',(err,data) => {
    done('b',data);
});
let done = after(2,(result) => {
    console.log('load success');
    for(let k in result) {
        console.log('=======',k,'=======');
        console.log(result[k]);
        console.log('=======end=======');
    }
});

