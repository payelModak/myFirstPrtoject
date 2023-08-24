// function operate(num1, num2, operator) {
//       op=num1+operator+num2
//         return eval (op);



// }
// console.log(operate(1, 2, "+"));
// console.log(operate(7, 10, "-"));
// console.log(operate(20, 10, "%"));
// console.log(operate(2, 1, "*"));


function operate(num1, num2, operator) {

if (operator === "+") { 
    return num1+num2
    
} else
if (operator==="-"){
    return num1-num2
}else 
if(operator==="*"){

    return num1*num2
}else
if(operator==="/"){
return num1/num2  

} else  { 
     
return num1%num2 
}
}
console.log(operate(1, 2, "+"));
console.log(operate(7, 10, "-"));
console.log(operate(20, 10, "%"));
