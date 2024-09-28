// Get the necessary DOM elements
const colorCode = document.getElementById("color-code");
const optionsContainer = document.getElementById("options-container");
let scoreContainer = document.getElementById("score");
let randomColor = null; // This will store the randomly selected correct color
let score = 0; // Initialize score

// Function to generate a random number between the given min and max
function generateRandomNumberBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

// Function to generate a random RGB color
function randomColorRGB() {
  const red = generateRandomNumberBetween(0, 255);
  const green = generateRandomNumberBetween(0, 255);
  const blue = generateRandomNumberBetween(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

// Function to increment and update the score
function incrementScore() {
  score += 1; // Increase score by 1
  scoreContainer.innerText = score; // Update the score on the UI
}

// Function to validate the selected color and handle the result
function validateResult(el) {
  const selectedColor = el.target.style.backgroundColor; // Get the color of the clicked element

  if (selectedColor === randomColor) {
    incrementScore(); // If the correct color is selected, increment score
  } else {
    // Add a black border to the element if the selected color is incorrect
    el.target.style.border = "5px solid red";
    score = 0; // Reset score if the wrong color is selected
  }

  window.localStorage.setItem("score", score); // Store the score in localStorage

  // Add a delay before resetting the game to allow users to see the result
  setTimeout(() => {
    startGame();
  }, 1000); // 1-second delay before starting the next game
}

// Function to start or reset the game
function startGame() {
  // Retrieve the score from localStorage or initialize it to 0
  score = Number(window.localStorage.getItem("score")) ?? 0;
  scoreContainer.innerText = score; // Display the score

  // Clear the options container to generate new color options
  optionsContainer.innerHTML = null;

  // Generate a random color for the player to guess
  randomColor = randomColorRGB();
  colorCode.innerText = randomColor; // Display the color code in the UI

  // Randomly select the index of the correct answer
  const ansIndex = generateRandomNumberBetween(0, 5);

  // Loop to create 6 color options
  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult); // Add click event listener for validation

    // Set the background color for each option, with one being the correct color
    div.style.backgroundColor = i === ansIndex ? randomColor : randomColorRGB();
    optionsContainer.append(div); // Add the option to the container
  }
}

// Start the game when the window loads
window.addEventListener("load", startGame);
