function inchesToFeet(inches) {
    let feet=0;
     feet=inches/12
   

if (12>inches) {
    return 0;
    
} else {
    return feet;
    
}
}
console.log(inchesToFeet(11));
console.log(inchesToFeet(12));
console.log(inchesToFeet(360));
