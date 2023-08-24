function operation(num1, num2) {
    if(num1+num2===24){
        return "added"
    }
     else if(num1-num2===24){
        return "subtracted"
    }
     else if(num1/num2===24){
        return "divided"
     }
   else if(num1*num2===24){
    return "multiplied"
   }
    else {
        return "null"
    }

}
console.log(operation(15, 9))
console.log(operation(26, 2))
console.log(operation(11, 11))
console.log(operation(6, 4))
console.log(operation(528, 22))