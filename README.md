
# Guess the Color Game

## Project Overview
This is a simple **Guess the Color** game where users guess the correct RGB color from six options. The correct RGB code is displayed, and players must select the correct color. The game keeps track of the player's score, and upon selecting an incorrect color, a black border is added to the wrong option for a short time before the game resets.

## How to Play
1. A random RGB color code will be shown on the screen.
2. You will be presented with six color options.
3. Click the color that you think matches the RGB code.
4. If you are correct, your score will increase.
5. If you choose the wrong color, your score will reset, and the wrong choice will be highlighted with a black border for 1 second before restarting the game.

## Game Flow
1. Random colors are generated using JavaScript and displayed in the browser.
2. Upon each guess, the game will check if the selected color matches the RGB code.
3. The game stores and tracks the score using `localStorage`.

## File Structure
```
|-- index.html
|-- script.js
|-- style.css (if using external stylesheet)
```

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Installation & Setup
1. Clone this repository:
   ```
   [https://github.com/mayur1911/GuessColor]
   ```
2. Open `index.html` in your web browser.

## License
This project is licensed under the MIT License.
