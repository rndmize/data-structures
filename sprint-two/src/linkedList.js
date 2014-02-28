var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // take value and add to tail
    var linkedListNode = makeNode(value);
    if (list.tail === null) {
      list.head = linkedListNode;
      list.tail = linkedListNode;
    }else{
      list.tail.next = linkedListNode;
      list.tail = linkedListNode;
    }
  };

  list.removeHead = function(){
    // removes and returns a linkedListNode
    var target = list.head;
    list.head = target.next;
    return target.value;
  };

  list.contains = function(target, node){
    // return boolean
    node = list.head;
    while(node !== null){
      if(node.value === target){
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
