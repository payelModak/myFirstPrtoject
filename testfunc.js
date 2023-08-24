// function add(num1, num2){
//     var add = 0;
//     add = num1 + num2;
//     return add;
// }
//  let a= add(4,5)

// console.log(a)
// let b= function add(num1, num2){
//     let c=0;
//     c=num1+num2;
//     console.log(c);
// }
// b(3,2);
// let a="hello"
// let f=function (){
//     console.log("hello");
// } 
//  f();
// let f=function(name){
//     console.log("hello" + name);

// };
// let excutor = function(fn, name){
//     fn(name);
// }
// excutor(f, "payel");
let myobj={
    "testprop": true
};
myobj.myMethod= function(){
    console.log("function in object");
};
myobj.myMethod();