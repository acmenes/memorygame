const gameContainer = document.getElementById("game");

//you need to figure out how to make a pair, so you
// will need the two flipped cards to be variables

let firstCard = null;
let secondCard = null;

//I might need to declare a clicks variable that cannot exceed 2

let clicks = 0;

//would a loop help?

// for(clicks = 0; clicks = 2, clicks ++){

// }

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

const score = document.querySelector("scorecounter")

//circle back to see how to get the score to increment

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  //you can always try to reapproach this
  console.log(event)
  console.log("you just clicked", event.target);
  let activeCardOne = event.target;
  activeCardOne.setAttribute("id", "active")
  if (event.target.classList.contains("orange")){
    console.log("orange!");
    document.getElementById("active").style.backgroundColor = "orange";
  } else if (event.target.classList.contains("red")){
    console.log("red!");
    document.getElementById("active").style.backgroundColor = "red";
  } else if (event.target.classList.contains("purple")){
    console.log("purple!");
    document.getElementById("active").style.backgroundColor = "purple";
  } else if (event.target.classList.contains("green")){
    console.log("green!")
    document.getElementById("active").style.backgroundColor = "green";
  } else if (event.target.classList.contains("blue")){
    console.log("blue!")
    document.getElementById("active").style.backgroundColor = "blue";
  } else {
    console.log("this shouldn't happen...")
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
