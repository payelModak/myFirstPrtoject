function valueAt(arr, i) {
   let a= arr.length;
   console.log(a);
   return Math.floor(i);


}
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2))
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2))
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2))
console.log(valueAt([1, 2], 1.0 / 2))