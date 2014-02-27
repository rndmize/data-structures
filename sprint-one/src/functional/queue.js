var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  instance.dequeue = function(){
    if (size !== 0) {
      var first = storage[0];
      size--;
      for (var i = 0; i < size; i++) {
        storage[i] = storage[i + 1];
      }
      return first;
    } else {
      return 'Nope';
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
