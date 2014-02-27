var makeQueue = function(){
  var instance = {};
  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.begin = 0;
  instance.end = 0;

  _.extend(instance, queueMethods);

  // Implement the methods below

  return instance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.end - this.begin;
};

queueMethods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

queueMethods.dequeue = function() {
  if (this.begin === this.end) {
    return console.log('WHAT WERE U THINKIN?!');
  }
  var item = this.storage[this.begin];
  this.begin++;
  return item;
};
