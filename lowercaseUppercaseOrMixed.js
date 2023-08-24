function getCase(str) {
    if (str===str.toUpperCase()) {
        return "upper" 
}  
    else if (str===str.toLowerCase()){
        return "lower"
        
    }
    else{
        return "mixed"
    }



}
console.log(getCase("whisper..."))
console.log(getCase("SHOUT!"))
console.log(getCase("Indoor Voice"))
console.log(getCase("......313whisper2131232..."))