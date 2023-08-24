function isPlural(word) {   
    if (word.slice(-1)==="s") {
        return true;
        
    } else {
        return false;
        
    }


}
console.log(isPlural("changes"))
console.log(isPlural("change"))
console.log(isPlural("magic"))