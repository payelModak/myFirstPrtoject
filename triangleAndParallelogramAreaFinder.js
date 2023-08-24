function areaShape(base, height, shape) {
   

    if (shape==="triangle"){
        return 0.5*base* height;
        
    } else  
     {
  
        return base* height;
    
    } 

}

console.log(areaShape(2, 3, "triangle"));
console.log(areaShape(8, 6, "parallelogram"));
console.log(areaShape(0.01, 5, "triangle"));