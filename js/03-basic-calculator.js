
function calculate(x, y, operation) {
    switch (operation) {
        case "add":
            return x + y;
        case "subtract":
            return x - y;
        case "multiply":
            return x * y;
        case "divide":
            return x / y;
        default:
            return "Invalid operation";
    }
}

var validEntry = true, firstNumber, secondNumber, operation

function getUserInput(){
    // // COLLECT FIRST NUMBER FROM USER
    firstNumber = parseFloat(prompt("Enter the first number:"));
    // // COLLECT SECOND NUMBER FROM USER
    secondNumber = parseFloat(prompt("Enter the second number:"));
    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    operation = prompt("Enter the operation (add, subtract, multiply, or divide):").toLowerCase();
}

do {  
    getUserInput()
    while (operation !== "add" && operation !== "subtract" && operation !== "multiply" && operation !== "divide") {
        alert("Invalid entry. Enter the operation from (add, subtract, multiply, or divide)")
        getUserInput()
        validEntry = false
    }
    validEntry = true

} while (!validEntry);

var result = calculate(firstNumber, secondNumber, operation);

alert("Result: " + result);