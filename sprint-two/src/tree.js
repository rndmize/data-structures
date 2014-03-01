var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.remove = treeMethods.remove;
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  if (this.children === undefined) {
    this.children = [];
  }
  this.children.push({
    'value': value,
    'parent': this,
    addChild: this.addChild,
    contains: this.contains,
    remove: this.remove
  });
};

treeMethods.remove = function(){
  var temp = this.parent;
  this.parent = null;
  for(var i = 0; i < temp.children.length; i++){
    var linkBroken = false;
    if(temp.children[i].parent === null){
      linkBroken = true;
      i++;
    }
    if(linkBroken){
      temp.children[i - 1] = temp.children[i];
    }
  }
  temp.children.pop();
  return this;
};



treeMethods.contains = function(target){
  // check a node
  if (this.value === target) {
    return true;
  }
  // check for children
  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

