function lessThan100(a,b) {
   let result=0
    if (a+b<100){
        result =true;
    }
    else {
        result = false;

    }
       return result;
}
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3,77));