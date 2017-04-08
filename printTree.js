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

module.exports = anotherPrint; 

