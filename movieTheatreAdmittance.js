function acceptIntoMovie(age,isSupervised) {
if (15<=age||isSupervised===true) {
    return true;
    
} else {
    return false;
    
}


}
console.log(acceptIntoMovie(14, true));
console.log(acceptIntoMovie(14, false));
console.log(acceptIntoMovie(16, false));