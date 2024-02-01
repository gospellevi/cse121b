/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Levi Gospel';
const currentYear = '2024';
const profilePicture = 'images/mypic.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}.`);


/* Step 5 - Array */
let favFoods = ['Garri', 'Beans', 'Moi-Moi', 'Rice', 'Oat Meal', 'Peppersoup', 'Noodles'];
document.getElementById('food').innerHTML = favFoods;

foodElement.innerHTML = favFoods
let newFood = 'Pottage';
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods}`;

// One way to remove 1st item in an array
/*let firstFavFood = 0;
favFoods.splice(firstFavFood, 1);
foodElement.innerHTML += `<br>${favFoods}`;*/

favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;

// One way to remove last time in an array
/*let lastFavFood = 6;
favFoods.splice(lastFavFood);
foodElement.innerHTML += `<br>${favFoods}`;*/




