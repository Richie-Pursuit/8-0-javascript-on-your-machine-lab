/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
 
   let sum = 0;
   
    if (process.argv[2] === 'plus') {
        
        for (let i = 3; i < process.argv.length; i++) {
        sum += parseInt(process.argv[i]);
    }
    return sum;
}
 else if (process.argv[2] === 'minus') { 

    let num = parseInt(process.argv[3])
    for (let r = 4; r < process.argv.length; r++){
        num -= parseInt(process.argv[r])
    }
    return num
 }
 else if (process.argv[2] !== 'minus' && process.argv[2] !== 'plus'){
    error = `Invalid operation: modulo`
    return error
 }
 else if (process.argv[2] === 0 ){
    error = `No operation provided...`
    return error
 }
 else if (process.argv[3] === false ){
    error = `"No numbers provided...`
    return error

 }

}


// Don't change anything below this line.
module.exports = calculator;
