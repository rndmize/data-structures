var makeBinarySearchTree = function(value){
  this.value = value;
  this.leftChild = null;
  this.rightChild = null;
};

makeBinarySearchTree.prototype.insert = function(value) {
  var node = {
    value : value,
    leftChild : null,
    rightChild : null
  };
  var parent = this.traverse(value, this);
  if(parent) {
    if(parent.rightChild){
      parent.rightChild = node;
    }else{
      parent.leftChild = node;
    }
  }
};

makeBinarySearchTree.prototype.traverse = function(target, currentNode) {
  console.log(currentNode.value);
  if (target === currentNode.value) {
    return false;
  } else if (target > currentNode.value) {
    if(currentNode.rightChild === null) {
      currentNode.rightChild = true;
      return currentNode;
    }
    this.traverse(target, currentNode.rightChild);
  } else if (target < currentNode.value) {
    if(currentNode.leftChild === null){
      currentNode.leftChild = true;
      return currentNode;
    }
    this.traverse(target, currentNode.leftChild);
  }
};

makeBinarySearchTree.prototype.contains = function() {

};

makeBinarySearchTree.prototype.depthFirstLog = function() {

};

