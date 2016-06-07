/**
 * Created by fengjj on 2016/6/7.
 */
let EventEmiter = require('event').EventEmitter;
let util = require('util');
function Promise() {
    EventEmiter.call(this);
}
util.inherits(Promise,EventEmiter);
Promise.prototype.then = function(sucFn,errFn,progressFn) {
    if(typeof sucFn === 'function') {
        this.once('success',sucFn);
    }
    if(typeof errFn === 'function') {
        this.once('error',errFn);
    }
    if(typeof processFn === 'function') {
        this.noce('progress',progressFn);
    }
}
function Defered() {
    this.state = 'unSuc';
    this.promise = new Promise();
}
Defered.prototype.resolve = function(data) {
    this.promise.emit('success',data);
}
Defered.prototype.reject = function(err) {
    this.promise.emit('error',err);
}
Defered.prototype.process = function(data) {
    this.promise.emit('progress',data);
}

