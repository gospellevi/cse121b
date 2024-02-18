/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

const displayTemples = (temples) => {
    // Clear the existing content of the templesElement
    // templesElement.innerHTML = "";
  
    // Use forEach to process each temple
    temples.forEach((temple) => {
      // Create a new article element
      const article = document.createElement("article"); // variable name changed
  
      // Create h3 for temple name
      const nameElement = document.createElement("h3");
      nameElement.textContent = temple.templeName;
      article.appendChild(nameElement);
  
      // Create image element with src and alt attributes
      const imageElement = document.createElement("img");
    //   imageElement.src = temple.imageUrl;
      imageElement.setAttribute("src", temple.imageUrl);
    //   imageElement.alt = temple.location;
      imageElement.setAttribute("alt", temple.location);
      article.appendChild(imageElement);
  
      // Add the article to the templesElement
      templesElement.appendChild(article);
    });
  };
  
/* async displayTemples Function */


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
      const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
      if (!response.ok) {
        throw new Error('Failed to fetch temple data');
      }
      const templeData = await response.json();
      templeList = templeData; // Assign the parsed JSON data to templeList
      displayTemples(templeList); // Call the displayTemples function to render temple data
    } catch (error) {
      console.error('Error fetching temple data:', error);
    }
  };

/* reset Function */
const reset = () => {
    // Clear the existing content of the templesElement
    templesElement.innerHTML = "";
  };
  

/* filterTemples Function */
const filterTemples = (temples) => {
    // Clear the existing content before displaying new results
    reset();
  
    // Get the selected filter value from the dropdown menu
    const filter = document.getElementById("filtered").value;
  
    // Use a switch statement to handle different filter options
    switch (filter) {
      case "utah":
        displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
        break;
      case "notutah":
        displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
        break;
      case "older":
        const dedicatedDate = new Date(1950, 0, 1);
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < dedicatedDate));
        break;
      case "alphabetical":
        displayTemples(temples.slice().sort((a, b) => a.templeName.localeCompare(b.templeName)));
        break;
      case "all":
        displayTemples(temples);
        break;
      default:
        console.error("Invalid filter option:", filter);
    }
  };  


getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
