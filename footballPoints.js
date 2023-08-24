function footballPoints(wins, draws, losses ) {
    let Points=0
    Points=(3*wins + 1* draws + 0*losses);
    return Points;  
}
console.log(footballPoints(3,4,2));
console.log(footballPoints(5,0,2));
console.log(footballPoints(0,0,1 ));