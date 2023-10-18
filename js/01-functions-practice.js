// STEP 1
function halfNumber(number) {
    let result = number / 2;
    return "Half of " + number + " is " + result + ".";
  }
console.log(halfNumber(20))
  
// STEP 2
function squareNumber(number) {
    let result = number * number
    return "The result of squaring the number " + number + " is " + result + "."
}
console.log(squareNumber(33))

// STEP 3
function percentOf(number1, number2){
    let percentage = (number1 / number2) * 100
    return  number1 + " is " + percentage + "% of " + number2
}
console.log(percentOf(15,3))

// STEP 4
function findModulus(number1, number2){
    let modulus  = (number1 % number2)
    let message = modulus  + " is the modulus of " + number1 + " and " + number2
    return message
}

console.log(findModulus(10,4))


// STEP 5