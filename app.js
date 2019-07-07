//game values

let min = 1,
max = 10,
winNum = 2,
guessesLeft = 3;


//UI elements
const game = document.querySelector('game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-btn'),
guessInput = document.querySelector('.guess-Input'),
message = document.querySelector('.message');

//assign UI min and max
minNum.textContent=min;
maxNum.textContent=max;

//listen for guess
guessBtn.addEventListener('click')