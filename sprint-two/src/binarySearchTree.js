





var makeBinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
  this.depth = 1;
  this.count = 1;
};

makeBinarySearchTree.prototype.insert = function(value) {
  var node = {
    value : value,
    left : null,
    right : null
  };
  this.count = 1;
  var parent = this.traverse(value, this);
  if(parent !== false) {
    if(parent.right === undefined){
      parent.right = node;
    }else{
      parent.left = node;
    }
  }
  if (this.depth < this.count) {
    this.depth = this.count;
  }



  // if the new node increases the number of levels
  //   if rotating will reduce the number of levels
  // root - top node (parent)
  // pivot - new top node (node)
  // if pivot is to right of root, root points to left child of pivot
  // if pivot is to left of root, root points to right child of pivot
  // root becomes child of pivot on opposite side of where pivot was attached to root
  // everyone smiles and there is candy in the stores all day long : ) : )

};

makeBinarySearchTree.prototype.traverse = function(target, currentNode) {
  if (target === currentNode.value) {
    return false;
  } else if (target > currentNode.value) {
    if(currentNode.right === null) {
      currentNode.right = undefined;
      return currentNode;
    }
    this.count++;
    return this.traverse(target, currentNode.right);
  } else if (target < currentNode.value) {
    if(currentNode.left === null){
      currentNode.left = undefined;
      return currentNode;
    }
    this.count++;
    return this.traverse(target, currentNode.left);
  }
};

makeBinarySearchTree.prototype.contains = function(target) {
  var result = this.traverse(target, this);
  if(result === false){
    return true;
  }else{
    if(result.right === undefined){
      result.right = null;
    }else{
      result.left = null;
    }
  }
  return false;
};

makeBinarySearchTree.prototype.depthFirstLog = function(callback, node) {
  if(node === undefined){
    node = this;
  }
  callback(node.value);
  if(node.left !== null){
    this.depthFirstLog(callback, node.left);
  }else if(node.right !== null){
    this.depthFirstLog(callback, node.right);
  }

};

