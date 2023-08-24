function frames(minutes,fps) {
    let result=0
    result=(60*fps)*minutes;
    return result;
}
console.log(frames(1,1));
console.log(frames(10,1));
console.log(frames(10,25));