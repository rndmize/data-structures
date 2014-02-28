var Queue = function() {
  this._storage = {};
  this._start = 0;
  this._end = 0;
};

Queue.prototype.enqueue = function(item){
  this._storage[this._end] = item;
  this._end++;
};

Queue.prototype.dequeue = function(){
  if(this._start === this._end){
    return console.log('Y U DO DIS');
  }
  var item = this._storage[this._start];
  this._start++;
  return item;
};

Queue.prototype.size = function(){
  return this._end - this._start;
};
