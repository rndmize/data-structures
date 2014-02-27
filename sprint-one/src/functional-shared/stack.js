/*  gobal  _  */

var makeStack = function() {
  var instance = {};

  instance.storage = {};
  instance.length = 0; // Hint: set an initial value here

  _.extend(instance, stackMethods);
  // Use an object with numeric keys to store values
  return instance;
};

var stackMethods = {
  size : function(){
    return this.length;
  },
  push: function(value){
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function(){
    if(this.length<=0){
      return console.log('Stack is empty');
    }
    this.length--;
    var item = this.storage[this.length];
    return item;
  }






};
