var makeBinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

makeBinarySearchTree.prototype.insert = function(value) {
  var node = {
    value : value,
    left : null,
    right : null
  };
  var parent = this.traverse(value, this);
  if(parent !== false) {
    if(parent.right === undefined){
      parent.right = node;
    }else{
      parent.left = node;
    }
  }
};

makeBinarySearchTree.prototype.traverse = function(target, currentNode) {
  console.log(currentNode.value);
  if (target === currentNode.value) {
    return false;
  } else if (target > currentNode.value) {
    if(currentNode.right === null || currentNode.right === undefined) {
      currentNode.right = undefined;
      return currentNode;
    }
    return this.traverse(target, currentNode.right);
  } else if (target < currentNode.value) {
    if(currentNode.left === null || currentNode.left === undefined){
      currentNode.left = undefined;
      return currentNode;
    }
    return this.traverse(target, currentNode.left);
  }
};

makeBinarySearchTree.prototype.contains = function(target) {
  return !this.traverse(target, this); // probably no side effects now
};

makeBinarySearchTree.prototype.depthFirstLog = function(callback) {

};

