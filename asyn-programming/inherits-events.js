/**
 * Created by fengjj on 2016/6/6.
 */
'use strict';
let events = require('events');
let EventEmitter = events.EventEmitter;

const util = require('util');

function Stream() {
    //EventEmitter.call(this);
}
util.inherits(Stream,EventEmitter);
let s = new Stream();
s.on('a',(data) => {
    console.log(data);
});
s.emit('a','hello');


