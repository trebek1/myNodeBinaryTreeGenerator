function getPermutations(str){
    //Enclosed data to be used by the internal recursive function permutate():
    var permutations = [],  //generated permutations stored here
        nextWord = [],      //next word builds up in here     
        chars = [],
        len = str.length;          //collection for each recursion level
    ;
    //---------------------
    //split words or numbers into an array of characters
    if (typeof str === 'string'){
        chars = str.split('');   
    } 
    else if (typeof str === 'number') {
      str = str + ""; //convert number to string
      chars = str.split('');//convert string into char array
    }
    //============TWO Declaratives========
    
        permutate(chars);

    return permutations;
    //===========UNDER THE HOOD===========
    function permutate(letters){ //recursive: generates the permutations
        
            if(nextWord.length > 0){
                permutations.push(nextWord.join(''));                
            }
            
        for (var i=0; i < letters.length; i++){
            
            letters.push(letters.shift());  //rotate the characters // This removes first character and pushes it onto the back of the array 
           
            nextWord.push(letters[0]);    //use the first char in the array  
            console.log("this is next ", nextWord )          
            
            permutate(letters.slice(1));  //Recurse: array-less-one-char  
            
            nextWord.pop();    
            console.log("also next", nextWord)         //clear for nextWord (multiple pops)
        }
    }
    //--------------------------------
}//==============END of getPermutations(str)=============