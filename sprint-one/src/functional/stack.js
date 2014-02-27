var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    if(size <= 0){
      return console.log('Stack is already empty');
    }
    size--;
    var item = storage[size];
    delete storage[size];
    return item;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
