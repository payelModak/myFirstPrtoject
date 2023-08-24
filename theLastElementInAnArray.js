function getLastItem(arry ) {
    let found=arry.pop();
    return found; 

}
console.log(getLastItem([1, 2, 3]));
console.log(getLastItem([1, 2, 3, 56, 87, 23, 65, 45]));