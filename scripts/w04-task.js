/* LESSON 3 - Programming Tasks */

/* Profile Object */
let myProfile = {
    name: 'Gospel Levi',
    photo: {
      src: 'images/mypic.jpg',
      alt: 'My Profile Picture'
    },
    favoriteFoods: [
      'Garri',
      'Beans',
      'Moi-Moi',
      'Rice',
      'Oat Meal',
      'Peppersoup',
      'Noodles'
    ],
    hobbies: [
      'Soccer video games',
      'Swimming',
      'Surfing the net'
    ],
    placesLived: [] // Initialize the placesLived array
  };
  
  /* Populate Profile Object with placesLive objects */
  myProfile.placesLived.push(
    {
      place: 'Ikeja, Lagos',
      length: '5 years'
    },
    {
      place: 'Enugu, Enugu',
      length: '2 years'
    },
    {
      place: 'Port Harcourt, Rivers',
      length: '2 years'
    }, 
    {
      place: 'Ogwashiuku, Delta',
      length: '5 months'
    }
  );
  
  /* DOM Manipulation - Output */
  /* Name */
  document.querySelector("#name").textContent = myProfile.name;
  
  /* Photo with attributes */
  document.querySelector('#photo').src = myProfile.photo.src;
  
  /* Favorite Foods */
  myProfile.favoriteFoods.forEach(food => {
    let listItem = document.createElement("li");
    listItem.textContent = food;
    document.querySelector('#favorite-foods').appendChild(listItem);
  });

  /* Hobbies */
  let hobbiesList = document.querySelector("#hobbies");
  myProfile.hobbies.forEach(function(hobby) { //Using function expression
    let listItem = document.createElement("li");
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
  });

  /* Places Lived */
  let placesLivedList = document.querySelector("#places-lived");
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = `for ${place.length}`;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
  });