function permutations(word){
    if(word.length === 1){
        return word; 
    }
    var perms = permutations(word.slice(1));
    var char = word[0]; 
    var solns = []; 
    for(var x in perms){
        var perm = perms[x];
        for(var i = 0; i<perm.length + 1; i++){
            var p = perm.slice(0,i) + char + perm.slice(i);
            solns.push(p);
        }
    }
    return solns;
}

console.log(permutations('alex'));


