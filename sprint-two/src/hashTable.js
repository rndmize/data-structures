var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._size === this._limit) {
    this._limit = this._limit * 2;
    var holder = makeLimitedArray(this._limit);

  }


  this._storage.set(i, v);
  this._size++;
  // console.log('"' + k + '", "' +  v + '", "' + i + '"');
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};

