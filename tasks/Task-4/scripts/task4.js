/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let per_info = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
per_info.name = "Zorro";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
per_info.photo = "images/Xbox_Logo.jpeg";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
per_info.fav_food = ["Fruit Smiles", "BBQ Ribs", "MTN DEW"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
per_info.hobbies = ["Video Games", "Dirt Biking", "Eating"];
// Step 6: Add another property named placesLived with a value of an empty array
per_info.places_lived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
per_info.places_lived.push({ place: "tresure valy", length: "20ish years" });
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived
per_info.places_lived.push({ place: "madason county", length: "1ish years" });


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = per_info.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").src = per_info.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").alt = per_info.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
var favoriteFoodsList = document.querySelector("#favorite-foods");
per_info.fav_food.forEach(function(food) {
  var listItem = document.createElement("li");
  listItem.textContent = food;
  favoriteFoodsList.appendChild(listItem);
});
// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
var hobbiesList = document.querySelector("#hobbies");
per_info.hobbies.forEach(function(hobby) {
  var listItem = document.createElement("li");
  listItem.textContent = hobby;
  hobbiesList.appendChild(listItem);
});
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
var placesLivedList = document.querySelector("#places-lived");
per_info.places_lived.forEach(function(placeObj) {
  var dt = document.createElement("dt");
  var dd = document.createElement("dd");
  dt.textContent = placeObj.place;
  dd.textContent = placeObj.length;
  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});