var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._length = 0; // Hint: set an initial value here


  return instance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this._length;
};

stackMethods.pop = function() {
  if (this._length <= 0) {
    return console.log('Empty stack');
  }
  this._length--;
  var item = this._storage[this._length];
  return item;
};

stackMethods.push = function(item) {
  this._storage[this._length] = item;
  this._length++;
};
