let min = 1,
    max = 10,
    numberOfGuesses = 3;
    winningNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(winningNumber);

//ui
const game = document.querySelector('#game');
const minSpan = document.querySelector('.min-num');
const maxSpan = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');
//

minSpan.textContent = min;
maxSpan.textContent = max;
//game start event 
guessBtn.addEventListener('click', startGame);
// play again event
game.addEventListener('mousedown', playAgain);

//Creating start game function
function startGame() {
    const guessInputSet = parseInt(guessInput.value);
   if (isNaN(guessInputSet) || guessInputSet < min || guessInputSet > max)  {
    gameMessage(`Please enter a number between ${min} and ${max}`);
    } else {
       if (guessInputSet === winningNumber) {
           //game over - win
           gameOver(`Yes you Guess it ${winningNumber} is the correct Number`, 'green' );
       } else {
        numberOfGuesses -= 1;
          if (numberOfGuesses === 0) {
              //game over - loss
              gameOver(`You loss the correct number was ${winningNumber}`, 'red');
          } else {
              //game continue
              gameContinue(`No... that was not the correct number, you have ${numberOfGuesses} more guesses Try Again!`, 'orange');
          };
       };
   };
};

function gameMessage(errorMessageText, errorMessageColor = 'red') {
    message.textContent = (errorMessageText);
    message.style.color = errorMessageColor;
};
//creating game over function
function gameOver(gameOverMessge, gameOverColor) {
    guessInput.disabled = true;
    guessBtn.value = 'Play Again';
    guessBtn.className = 'playAgain';
    gameMessage(gameOverMessge, gameOverColor);
};
//creating funciton game continue
function gameContinue(gameOverMessge, gameOverColor) {
    guessInput.value = '';
    gameMessage(gameOverMessge, gameOverColor);
};
//Creating play again function
function playAgain(e) {
    if (e.target.className === 'playAgain') {
        window.location.reload();
    }
};