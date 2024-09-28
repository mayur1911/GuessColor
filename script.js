const colorCode = document.getElementById("color-code");
const optionsContainer = document.getElementById("options-container");
let scoreContainer = document.getElementById("score");
let randomColor = null;
let score = 0;

function generateRandormNumberBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

function randomColorRGB() {
  const red = generateRandormNumberBetween(0, 255);
  const green = generateRandormNumberBetween(0, 255);
  const blue = generateRandormNumberBetween(0, 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

function incrementScore() {
  score += Number(1);
  scoreContainer.innerText = score;
}
function validateResult(el) {
  //console.log(el.target.style)
  const selectedColor = el.target.style.backgroundColor;
  //   console.log(selectedColor);
  //   console.log(randomColor);
  if (selectedColor === randomColor) {
    incrementScore();
    // console.log("correct answer");
  } else {
    // Add a red border to the element if the selected color is incorrect
    el.target.style.border = "5px solid black";
    score = Number(0);
  }
  window.localStorage.setItem("score", score);
  // Add a delay of 1 second (1000ms) before resetting the game
  setTimeout(() => {
    startGame();
  }, 1000);
}

function startGame() {
  score = Number(window.localStorage.getItem("score")) ?? Number(0);
  scoreContainer.innerText = score;
  optionsContainer.innerHTML = null;
  randomColor = randomColorRGB();
  colorCode.innerText = randomColor;
  const ansIndex = generateRandormNumberBetween(0, 5);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult);
    div.style.backgroundColor = i === ansIndex ? randomColor : randomColorRGB();
    optionsContainer.append(div);
  }
}

window.addEventListener("load", startGame);
// console.log(generateRandormNumberBetween(0, 255));
// console.log(randomColorRGB());
