// function checkEquality(a,b) {
  
  
//     if (a==b){
//                 return true;
                
//     } else {
//         return false; 
//     }

// }
// console.log(checkEquality(1,true));

// console.log(checkEquality(0,"0"));

function checkEquality(a,b,c) {
    if (a==b || b==c || c==a) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEquality(1,"0", true))
console.log(checkEquality(0,"0", true))