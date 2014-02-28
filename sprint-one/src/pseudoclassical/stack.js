var Stack = function() {

  this._storage = {};
  this._length = 0; // Hint: set an initial value here
};

Stack.prototype.size = function() {
  return this._length;
};

Stack.prototype.pop = function() {
  if (this._length <= 0) {
    return console.log('Empty stack');
  }
  this._length--;
  var item = this._storage[this._length];
  return item;
};

Stack.prototype.push = function(item) {
  this._storage[this._length] = item;
  this._length++;
};


