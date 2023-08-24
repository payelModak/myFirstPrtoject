function convert(hours, minutes) {
    let add=0
    add=(3600*hours + 60*minutes );
    return add;
    }
    console.log(convert(1,3));
    console.log(convert(2,0));
    console.log(convert(0,30));
