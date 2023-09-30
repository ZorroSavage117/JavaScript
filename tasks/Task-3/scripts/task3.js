/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function add(num1, num2) {
    // Step 2: In the function, return the sum of the parameters number1 and number2
    // num1 = 1;
    // num2 = 1;
    return num1 + num2;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
    let num1 = parseFloat(document.querySelector('#addend1').value);
    let num2 = parseFloat(document.querySelector('#addend2').value);

    console.log('addend1:', addend1);
    console.log('addend2:', addend2);

    let sum = add(num1, num2);

    console.log('sum', sum);

    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector('#sum').value = sum;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
let subtract = function(num1, num2) {
    return num1 - num2;
};

function subtractNumbers() {
    let minuend = parseFloat(document.querySelector('#minuend').value);
    let subtrahend = parseFloat(document.querySelector('#subtrahend').value);
    let differenceResult = subtract(minuend, subtrahend);
    document.querySelector('#difference').value = differenceResult;
}
  
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
let multiply = (num1, num2) => num1 * num2;

function multiplyNumbers() {
    let factor1 = parseFloat(document.querySelector('#factor1').value);
    let factor2 = parseFloat(document.querySelector('#factor2').value);
    let productResult = multiply(factor1, factor2);
    document.querySelector('#product').value = productResult;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(num1, num2) {
    if (num2 === 0) {
      return "Division by zero is undefined";
    }
    return num1 / num2;
}
  
function divideNumbers() {
    let dividend = parseFloat(document.querySelector('#dividend').value);
    let divisor = parseFloat(document.querySelector('#divisor').value);
    let quotientResult = divide(dividend, divisor);
    document.querySelector('#quotient').value = quotientResult;
}
  
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date();
// Step 2: Declare a variable to hold the current year
let curYear = null;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
curYear = date.getFullYear()
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').textContent = curYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numberArray = Array.from({ length: 25 }, (_, i) => i + 1);

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = numberArray;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let oddNumbers = numberArray.filter(number => number % 2 !== 0);
document.querySelector('#odds').textContent = oddNumbers;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evenNumbers = numberArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sumOfArray = numberArray.reduce((acc, number) => acc + number, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let multipliedNumbers = numberArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multipliedNumbers;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumOfMultiplied = multipliedNumbers.reduce((acc, number) => acc + number, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;