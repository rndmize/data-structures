var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  if (this._size >= 0.75 * (this._limit)) {
    this._limit = this._limit * 2;
    var biggerArray = makeLimitedArray(this._limit);
    // console.log('this', this);

    this._storage.each(function(item) {
      // console.log('item',item);
      if (item !== undefined) {
        var hash = getIndexBelowMaxForKey(item[0], this._limit);
        biggerArray.set(hash, item);
      }
    });
    this._storage = biggerArray;
  }

  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, [k,v]);
  this._size++;
  // console.log('"' + k + '", "' +  v + '", "' + i + '"');
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var value = this._storage.get(i);

  return value[1];

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._size--;
  this._storage.set(i, [null, null]);

  if((this._limit > 8) && ( this._size <= 0.25 * (this._limit))){
    this._limit = this._limit * 0.5;
    var smallerArray = makeLimitedArray(this._limit);

    this._storage.each(function(item){
      if(item !== undefined && item[0] !== null){
        var hash = getIndexBelowMaxForKey(item[0], this._limit);
        smallerArray.set(hash, item);
      }
    });
    this._storage = smallerArray;
  }
};

