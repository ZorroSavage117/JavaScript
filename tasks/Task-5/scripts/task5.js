/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const today = new Date();

// Step 2: Declare another variable to hold the day of the week
let week_day;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week
// (hint: getDay()) week_day = days week_day];
week_day = today.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message1;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if  (week_day >= 1 && week_day <= 5) {
  message1 = 'Hang in there!';
} else {
  // Step 6: Using an else statement, set the message variable to 'Woohoo! It is the weekend!'
  message1 = 'Woohoo! It is the weekend!';
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2;

// Step 2: Use switch, case, and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.)
switch (week_day) {
    case 0:
      message2 = "Sunday";
      break;
    case 1:
      message2 = "Monday";
      break;
    case 2:
      message2 = "Tuesday";
      break;
    case 3:
      message2 = "Wednesday";
      break;
    case 4:
      message2 = "Thursday";
      break;
    case 5:
      message2 = "Friday";
      break;
    case 6:
      message2 = "Saturday";
      break;
    default:
      message2 = "Unknown - " + week_day;
      break;
  }

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').textContent = message1;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').textContent = message2;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(temples) {
  temples.forEach((temple) => {
    // - Creates an HTML <article> element
    let article = document.createElement('article');

    // - Creates an HTML <h3> element and add the temple's templeName property to it
    let h3 = document.createElement('h3');
    h3.textContent = temple.templeName;

    // - Creates an HTML <h4> element and add the temple's location property to it
    let Location = document.createElement('h4');
    Location.textContent = temple.location;

    // - Creates an HTML <h4> element and add the temple's dedicated property to it
    let Dedicated = document.createElement('h4');
    Dedicated.textContent = temple.dedicated;

    // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
    let img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;

    // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
    article.appendChild(h3);
    article.appendChild(Location);
    article.appendChild(Dedicated);
    article.appendChild(img);

    // - Appends the <article> element to the HTML element with an ID of temples
    document.querySelector("#temples").appendChild(article);
  });
}

// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {
  // Step 4: In the function, using the built-in fetch method, call this absolute URL:
  // 'https://byui-cse.github.io/cse121b-course/week05/temples.json'.
  const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');

  // Step 5: Convert your fetch response into a JavaScript object (hint: .json()). Store this in the templeList variable you declared earlier (Step 1).
  templeList = await response.json();

  // Step 6: Finally, call the output function and pass it the list of temples.
  output(templeList);
}

// Execute your getTemples function to make sure it works correctly.
getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
  document.querySelector('#temples').innerHTML = '';
}

// Step 8: Declare a function named sortBy that does the following:
function sortBy() {
  // - Calls the reset function
  reset();

  // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
  let filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "tempaleNameAscending":
      output(
        templeList.sort((temple1, temple2) => {
          return temple1.templeName.localeCompare(temple2.templeName, undefined, { sensitivity: 'base' });
        })
      );
      break;
    case "templeNameDescending":
      output(
        templeList.sort((temple1, temple2) => {
          return temple2.templeName.localeCompare(temple1.templeName, undefined, { sensitivity: 'base' });
        })
      );
      break;
      // using ternary operators
      default:
      // - Calls the output function passing in the sorted list of temples
      output(
        templeList.sort((temple1, temple2) => {
          return temple1.templeName.localeCompare(temple2.templeName, undefined, { sensitivity: 'base' });
        })
      );
      break;
  }
}

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector('#sortBy').addEventListener('change', sortBy);
