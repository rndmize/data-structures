  var assert = chai.assert;

describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new makeBinarySearchTree(5);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog'", function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it("should insert values at the correct location in the tree", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it("should have a working 'contains' method", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    assert.isTrue(binarySearchTree.contains(7));
    assert.isFalse(binarySearchTree.contains(8));
  });

  it("should execute a callback on every value in a tree using 'depthFirstLog'", function(){
    var array = [];
    var func = function(value){ array.push(value); }
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    assert.notStrictEqual(array, [5,2,3]);
  });

  it("should track depth", function(){
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(4);
    binarySearchTree.insert(10);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    expect(binarySearchTree.depth).to.equal(4);
  });


  it("should track depth for unbalanced tree", function(){
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    expect(binarySearchTree.depth).to.equal(5);
  });

  it("the tree should balance itself", function(){
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    expect(binarySearchTree.depth).to.equal(3);
  });

  it("depth should adjust to balancing changes", function(){
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(5);
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.insert(6);
    binarySearchTree.insert(7);
    expect(binarySearchTree.depth).to.equal(4);
  });
});
