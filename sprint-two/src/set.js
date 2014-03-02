var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (this._storage === undefined) {
    this._storage = {};
  }
  item = JSON.stringify(item);
  this._storage[item] = this;
};

setPrototype.contains = function(item){
  item = JSON.stringify(item);
  for (var key in this._storage) {
    if (key === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item){
  item = JSON.stringify(item);
  delete this._storage[item];
};
