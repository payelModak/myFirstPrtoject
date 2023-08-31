function arrayLessThan100(arr){
   let a=0
for (i=0;i<= arr.length-1;i++){
 a+=(arr[i])
}
if (a<100) {
   return true;
   
} else {
   return false
}
 }

console.log(arrayLessThan100([5, 57]));
console.log(arrayLessThan100([77, 30]));