function toNumberArray(arr) {
    let num=arr.map(Number)
    return num;


}
console.log(toNumberArray(["9.4", "4.2"]))
console.log(toNumberArray(["1", "3", "3.6"]))
console.log(toNumberArray(["7", "14", "16", "18", "19", "20"]))