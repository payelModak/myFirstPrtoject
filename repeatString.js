function repeatString(txt, n) {
    
    if (a = txt.repeat(n) || typeof txt==!"string" ) {
        return a;
        
    } else {
        return "Not A String!!"
        
    }


}
console.log(repeatString("Mubashir", 2))
console.log(repeatString(1990, 7))
console.log(repeatString("Matt", 3))