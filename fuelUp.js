function calculateFuel(distance) {
    let totalFuel = distance*10;
    if(totalFuel > 100){
        return totalFuel; 
    }else{
        return 100;
    }
    
}
console.log(calculateFuel(15));
console.log(calculateFuel(3));