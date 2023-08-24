function howManyWalls(n, w, h) {
let complete=0;
complete=n/(w*h);
return complete;

}
console.log(howManyWalls(100, 4, 5));
console.log(howManyWalls(41, 3, 6));
console.log(howManyWalls(50, 11, 5));
console.log(howManyWalls(1, 1, 1));