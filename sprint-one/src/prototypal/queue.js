var makeQueue = function() {
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._start = 0;
  instance._end = 0;

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(item){
  this._storage[this._end] = item;
  this._end++;
};

queueMethods.dequeue = function(){
  if(this._start === this._end){
    return console.log('Y U DO DIS');
  }
  var item = this._storage[this._start];
  this._start++;
  return item;
};

queueMethods.size = function(){
  return this._end - this._start;
};
