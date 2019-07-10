"use strict";

//get win num
const getWinNum = (min, max) => {
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(randomNum);
  return randomNum;
};
//game values
const min = 1,
  max = 10;
let winNum = getWinNum(min, max),
  guessesLeft = 3;

//UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//assign UI min and max
(minNum.textContent = min), (maxNum.textContent = max);

//listen for guess
guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Enter a number between ${min} and ${max}`, "red");
  }
  //check for win
  if (guess === winNum) {
    gameOver(true, `${winNum} is correct!`);
  } else {
    //lose
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(false, `No more guesses left. The correct number is ${winNum}!`);
    }
    //clear input
    guessInput.value = "";
    //change border color
    guessInput.style.borderColor = "red";
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
  }
});

//game over
const gameOver = (won, msg) => {
  let color;
  won === true ? (color = "green") : (color = "red");
  //disable
  guessInput.disabled = true;
  //change border color and text color
  message.style.color = color;
  guessInput.style.borderColor = color;
  //set message
  setMessage(msg);
  //pplay agaian
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
};
//set message
const setMessage = (msg, color) => {
  message.style.color = color;
  message.textContent = msg;
};
//play again
game.addEventListener("mousedown", e => {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});
