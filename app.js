const gameContainer = document.getElementById("game");
const score = document.querySelector("scorecounter")

// I might declare these in a function later
// let firstCard = null;
// let secondCard = null;
// let clicks = 0;

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

  function shuffle(array) {
    let counter = array.length;
  
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
  
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
  
    return array;
  }

  let shuffledColors = shuffle(COLORS);

  function createDivsForColors(colorArray) {
    for (let color of colorArray) {
      const newDiv = document.createElement("div");
      newDiv.classList.add(color);
      newDiv.addEventListener("click", handleCardClick);
      newDiv.addEventListener("click", colorShow)
      gameContainer.append(newDiv);
    }
  }

  function handleCardClick(event) {
    console.log(event)
    console.log("you just clicked", event.target); 
}

//so you need to write code that will allow you to pick no more than 
//two cards at once. cards should match or else they will flip back over.
//we need some kind of "check for match" function
//I think I still want to use my if statements

function colorShow(event){
    if (event.target.classList.contains("orange")){
        console.log("orange!");
        // document.getElementById("active").style.backgroundColor = "orange";
      } else if (event.target.classList.contains("red")){
        console.log("red!");
        // document.getElementById("active").style.backgroundColor = "red";
      } else if (event.target.classList.contains("purple")){
        console.log("purple!");
        // document.getElementById("active").style.backgroundColor = "purple";
      } else if (event.target.classList.contains("green")){
        console.log("green!")
        // document.getElementById("active").style.backgroundColor = "green";
      } else if (event.target.classList.contains("blue")){
        console.log("blue!")
        // document.getElementById("active").style.backgroundColor = "blue";
      } else {
        console.log("this shouldn't happen...")
      }
}

createDivsForColors(shuffledColors);

//write a function to disable the cards once they are clicked. removeeventlisteners