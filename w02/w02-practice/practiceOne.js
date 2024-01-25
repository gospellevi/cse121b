const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;
console.log(typeof myInt)
console.log(typeof myFloat)
console.log(myFloat)
console.log(myInt)
console.log(myFloat + myInt)

const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal)
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces)

let myNumber = "74";
console.log(Number(myNumber) + 3)

console.log(60 % 3)

let discount = 0.1;
if (discount < 12 && discount >= 3) {
    console.log("No discount")
}

let homeWard = 12;
const ward = "<strong>Home Ward</strong>: " + homeWard;
console.log(ward)


let myArray = [12, 15, 0, 2]
const lastValue = myArray[myArray.length - 1];
console.log(lastValue)


const section = document.createElement('section');
const h3 = document.createElement('h3');
h3.textContent = 'Relief Society';