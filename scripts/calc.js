function addition (num1, num2) {
 
    if (num1 === undefined || num2 === undefined) {
        throw Error("Two numbers are required")
    } else {
        return num1 + num2;
    }
    
}
    
    
    

module.exports = addition;