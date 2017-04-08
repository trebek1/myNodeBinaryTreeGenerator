// BINARY TREES 

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


// var bfsPrint = function(tree){
// 	var values = []; 
// 	var second = []; 

// 	var str = "";
// 	var h = tree.root; 

// 	values.push(h);


// 	var loop = function(val,sec){
// 		while(val.length > 0){
// 			var n = val.shift(); 
// 			str += n.value; 
// 			str += " ";
// 			if(n.left){
// 				sec.push(n.left);
// 			}
// 			if(n.right){
// 				sec.push(n.right);
// 			}
// 		}
// 		if(str){
// 			console.log(str);
// 			str = "";
// 		}
// 	}

// 	while(1){
// 		loop(values,second);
// 		loop(second,values);
// 		if(!values.length && !second.length){
// 			break; 
// 		}
// 	}
// }


var anotherPrint = function(tree){
	// start with root of tree
	var current = tree.root; 
	// count of nodes on this level
	var currentCount = 1; 
	// nodes on next level 
	var nextCount = 0; 
	//string of level to print out 
	var str = "";
	// nodes to work on 
	var nodes = []; 
	// load root for working 
	nodes.push(current); 

	while(nodes.length > 0){
		current = nodes.shift(); 
		str+= current.value; 
		str+= " "; 
		currentCount--; 

		if(current.left){
			nodes.push(current.left);
			nextCount++;
		}

		if(current.right){
			nodes.push(current.right);
			nextCount++; 
		}

		if(currentCount == 0){
			console.log(str); 
			str = ""; 
			currentCount = nextCount; 
			nextCount = 0; 
		}
	}
}

//ANOTHER ? 
// def printlevel( root ):
// stack0 = [ root ]
// while stack0:
// stack1 = []
// for r in stack0:
// print r._val,
// if r._l:
// stack1.append( r._l )
// if r._r:
// stack1.append( r._r )
// print 
// stack0 = stack1[:]


var bt = new BinaryTree(); 
var bbt = new BinaryTree(); 
var nums = []; 
var num; 
var calcNum = function(){
	return Math.floor(Math.random()*1001);  
}

for(var i = 0; i<process.argv[2]; i++){
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

// print the In Order BST 
//bfsPrint(bbt);

anotherPrint(bbt);


})(); 













