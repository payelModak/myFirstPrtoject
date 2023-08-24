function area(a,b) {
    let AreaOfARectangle=0
    AreaOfARectangle=a*b

    if (AreaOfARectangle<1) {
        return -1;
        
    } else {
        return AreaOfARectangle;
    }
     
}
console.log(area(3, 4));
console.log(area(0, 2));