// Create a function that can subtract two numbers.

// 1. Break down problem and make sure you understand what it is asking.
    // Goal: Write a function.
// 2. INPUT:
    // Could be any of...
        // * Reading a file
        // * There is a variable available us
        // * Functions might have parameters (accept arguments)
        // * Reading from a database
    // In this example our input(s) is/are:
        // num1 -> {number}
        // num2 -> {number}
// 3. OUTPUT:
    // In this example our output is:
        // The difference between the two nums {number}
// 4. PROCESSING:
    // The indivual steps we need to take to get from INPUT to OUTPUT within the context of our goal.

// Working iteratively

// Create a function that can subtract two numbers.

// Goal: function.
function subtractTwoNums(num1, num2) { // INPUTS: num1 {number}, num2 {number}
    let difference;

    // Middle step(s)
    // * Check if both inputs are numbers.
    // * Subtract second input from first

    if(isNaN(num1) || isNaN(num2)) {
        return 'Invalid! Please provide two numbers.';
    }

    difference = Number(num1) - Number(num2);

    return Number(difference); // OUTPUT: {number}
}

let difference = subtractTwoNums(5, 3);
console.log('5 - 3 =', difference); // 2

difference = subtractTwoNums(15, 5);
console.log('15 - 5 =', difference); // 10

difference = subtractTwoNums(100, 500);
console.log('100 - 500 =', difference); // -400

difference = subtractTwoNums('hi', 500);
console.log('"hi" - 500 =', difference); // Output message saying invalid!
