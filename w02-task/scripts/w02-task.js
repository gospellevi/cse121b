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
nameElement.textContent = fullName;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}. He is a tech guy.`);


/* Step 5 - Array */
let favFoods = ['Garri', 'Beans', 'Moi-Moi', 'Rice', 'Oat Meal', 'Peppersoup', 'Noodles'];
document.getElementById('food').innerHTML = favFoods;

foodElement.innerHTML = favFoods
let newFood = 'Pottage';
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods}`;





