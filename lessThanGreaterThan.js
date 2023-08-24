function arrBetween(num1, num2, arr) {
    let a=num1<arr
    let b=a<num2
    return Array.from(b);


}
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]))