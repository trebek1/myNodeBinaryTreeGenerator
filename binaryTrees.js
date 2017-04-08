// BINARY TREES 

var fs = require('fs');
var anotherPrint = require('./printTree');

(function(){

var Node = function(val){
	this.left = null; 
	this.right = null; 
	this.value = val; 
}

var BinaryTree = function(){
	this.root = null; 
}

BinaryTree.prototype.push = function(node){
	if(this.root === null){
		this.root = node; 
		return;
	}

	var current = this.root; 

	while(current){
		if(node.value < current.value){
			if(!current.left){
				current.left = node; 
				break; 
			}else{
				current = current.left; 
			}
		}else if(node.value > current.value){
			if(!current.right){
				current.right = node;
				break;
			}else{
				current = current.right 
			}

		}else{
			console.log("an error occured");
			break; 
		}
	}
}


var bt = new BinaryTree(); 
var bbt = new BinaryTree(); 
var nums = []; 
var num; 
var nodes = process.argv[2] || 15; 

var calcNum = function(){
	return Math.floor(Math.random()*1001);  
}



for(var i = 0; i<nodes; i++){
	num = calcNum();
	while(nums.indexOf(num) != -1){
		num = calcNum(); 
	}
	var nNode = new Node(num);
	bt.push(nNode);
	nums.push(num);
}

//console.log("this is the bT ", bt); -- > Not that effective, do DFS or BFS 

//Let's balance the BST here first 

// Balancing a BST 
//1) Inorder Traveral through tree (guarantees smallest to largest sorted array )

var inorderNodes = []; 


var toArray = function(bst){

	var inorderNodes = []; 

	var stack = []; 

	var current = bst.root;

	while(current != null){

		//add node to stack if it has a left node 
		stack.unshift(current); 
		current = current.left; 
		
	}

	while(stack.length > 0){
		//remove first node on stack 
		var current = stack.shift();
		// put node on inorderNodes 
		inorderNodes.push(current); 

		// if the target has a right node, put it on the stack
		if(current.right != null){
			current = current.right; 
			//stack.unshift(current);
			// look all the way left and add those nodes to the stack 
			while(current != null){
				stack.unshift(current); 
				current = current.left; 		
			}
		}
	}

	return inorderNodes; 

}

// Use the toArray method to turn the tree into an in-order array that we 
// can use to build a Balanced BST 

var arr = toArray(bt);

//2) put each value into a queue 
//3) find middle of queue and set as root 
//4) each half of the array becomes the next part of the tree

var toBBST = function(arr, start, end){

	// base case, returns the end of the tree 
	if(start > end){
		return null; 
	}

	var middle = Math.floor((end + start)/2); 
	var target = arr[middle]; 

	target.left = toBBST(arr, start, middle - 1);
	target.right = toBBST(arr,middle + 1, end);

	return target;

}

bbt.root = toBBST(arr, 0, arr.length - 1); 

fs.writeFile("./tree.js", JSON.stringify(bbt), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

// print the In Order BST 
//bfsPrint(bbt);

anotherPrint(bbt);

// Delete a node 


})(); 

(function(){

var tree = require("./testTree"); 

console.log("printing from part 2  ");

var deleteNode = function(value){
	var current = tree.root; 
	var target, children = 0; 
	while(current){
		if(value < current.value){
			current = current.left; 
		}else if(value > current.value){
			current = current.right;
		}else{
			console.log("HERE!");
			target = current; 
			if(target.left != null){
				children++; 
			}
			if(target.right != null){
				children++; 
			}
			break; 
		}
	}
	//target.value = null; 
}
// console.log("***********************");
// anotherPrint(tree);
deleteNode(502);
// anotherPrint(tree);
// console.log("***********************");

})()


















