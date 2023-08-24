function shouldServeDrinks(age,onBreak) {
    if (18<=age||onBreak===false) {
        return true;
        
    } else {
        return false;        
    }


}
console.log(shouldServeDrinks(17, true));
console.log(shouldServeDrinks(19, false));
console.log(shouldServeDrinks(30, true));