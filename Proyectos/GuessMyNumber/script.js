'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 10;
let attempts = 0;

const mensaje = document.querySelector('.message');

console.log(mensaje.textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Not a Number';
  } else if (guess > 20 || guess < 0) {
    document.querySelector('.message').textContent =
      '⛔ Invalid Number, it must be between 1 and 20!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'you win 🥇';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.h1').textContent = 'You Got the number ✔🎉';
    document.querySelector('h1').style.color = 'blue';

    document.querySelector('.guess').disabled = true;
    document.querySelector('.number').textContent = secretNumber;

    hScoreRecomended();
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 too high';
    score--;
    document.querySelector('.score').textContent = score;
    attempts++;
    document.querySelector('.attempts').textContent = attempts;
    document.querySelector('.guess').value = '';

    gameScore();
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 too low';
    score--;
    document.querySelector('.score').textContent = score;
    attempts++;
    document.querySelector('.attempts').textContent = attempts;
    document.querySelector('.guess').value = '';

    gameScore();
  }
});

function gameScore() {
  if (score <= 0) {
    document.querySelector(
      '.message'
    ).textContent = `😭 You lose. the nomber is ${secretNumber}, try again! 😁`;
    document.querySelector('.score').textContent = 0;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.number').textContent = secretNumber;
  }
}

function highScore() {
  document.querySelector('.highscore').textContent =
    score > document.querySelector('.highscore').textContent
      ? score
      : document.querySelector('.highscore').textContent;
}

function hScoreRecomended() {
  let highscore = 0;
  highscore = score > highscore ? score : highscore;

  document.querySelector('.highscore').textContent = highscore;
}

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.background = '#222';
  document.querySelector('.message').textContent =
    'Start guessing... You have 10 attempts! 😜';
  score = 10;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').value = '';
  attempts = 0;
  document.querySelector('.attempts').textContent = attempts;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.h1').textContent = 'Guess my number!';
  document.querySelector('h1').style.color = '#eee';
  secretNumber = Math.floor(Math.random() * 20) + 1;
});
