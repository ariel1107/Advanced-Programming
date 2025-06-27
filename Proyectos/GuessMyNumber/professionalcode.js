'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 10;
let attempts = 0;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(message) {
  document.querySelector('.score').textContent = message;
}

function displayAttempts(message) {
  document.querySelector('.attempts').textContent = message;
}

function inputValue(value) {
  document.querySelector('.guess').value = value;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ Not a Number');
  } else if (guess > 20 || guess < 0) {
    displayMessage('⛔ Invalid Number, it must be between 1 and 20!');
  } else if (guess === secretNumber) {
    displayMessage('you win 🥇');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.h1').textContent = 'You Got the number ✔🎉';
    document.querySelector('h1').style.color = 'blue';

    document.querySelector('.guess').disabled = true;
    document.querySelector('.number').textContent = secretNumber;

    highScore();
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '📈 too high' : '📉 too low');
    score--;
    displayScore(score);
    attempts++;
    displayAttempts(attempts);
    inputValue('');

    gameScore();
  }
});

function gameScore() {
  if (score <= 0) {
    displayMessage(`😭 You lose. the nomber is ${secretNumber}, try again! 😁`);
    displayScore(0);
    document.querySelector('.guess').disabled = true;
    document.querySelector('.number').textContent = secretNumber;
  }
}

function highScore() {
  highscore = score > highscore ? score : highscore;

  document.querySelector('.highscore').textContent = highscore;
}

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.background = '#222';
  displayMessage('Start guessing... You have 10 attempts! 😜');
  score = 10;
  displayScore(score);
  document.querySelector('.guess').disabled = false;
  inputValue('');
  attempts = 0;
  displayAttempts(attempts);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.h1').textContent = 'Guess my number!';
  document.querySelector('h1').style.color = '#eee';
  secretNumber = Math.floor(Math.random() * 20) + 1;
});
