/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition/Declaration - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)



/* Function Expression - Subtract Numbers */
const subtract = function (num1, num2) {
    return num1 - num2;
}

const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);



/* Arrow Function - Multiply Numbers */
const multiply = (a, b) => a * b;

const multiplyNumbers = () => {
    let factor1 = Number(document.getElementById('factor1').value);
    let factor2 = Number(document.getElementById('factor2').value);
    let product = multiply(factor1, factor2);
    document.getElementById('product').value = product;
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */
const divide = (x, y) => x / y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);
    let quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient.toFixed(2);
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);



/* Decision Structure */
// adding an event listener for the "get total due" button
const getTotalDue = () => {
    // create variable to store user input
    let subTotal = parseFloat(document.getElementById('subtotal').value);
    // check membership checkbox status
    let isClubMember = document.getElementById('member').checked;
    // apply 20% discount if user is a club member
    if (isClubMember) {
        subTotal -= subTotal * 0.2;
    }

    document.getElementById('total').innerHTML = `$ ${subTotal.toFixed(2)}`;

    // if not a club member...
    if (!isClubMember) {
        document.getElementById('total').innerHTML = `$ ${subtotal.toFixed(2)}`;
    }    

}

document.getElementById('getTotal').addEventListener('click', getTotalDue);



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
// Declare and instantiate the array variable
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Array value assignemnt to HTML ID "array"
document.querySelector('#array').textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);










