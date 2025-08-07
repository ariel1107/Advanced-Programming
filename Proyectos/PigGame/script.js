"use strict";

const scorePlayer1 = document.querySelector(".score-1");
const scorePlayer2 = document.querySelector(".score-2");
const currentPlayer1 = document.querySelector(".current-1");
const currentPlayer2 = document.querySelector(".current-2");
const btnnew = document.querySelector(".new");
const btnroll = document.querySelector(".roll");
const btnhold = document.querySelector(".hold");
const dices = document.querySelector(".dices");
const section1 = document.querySelector(".left");
const section2 = document.querySelector(".right");
const main = document.querySelector("main");

let activePlayer, current, score, score2, playing;
current = 0;
score = 0;
score2 = 0;
playing = true;
activePlayer = 1;

function newGame() {
  playing = true;
  current = 0;
  score = 0;
  score2 = 0;
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentPlayer1.textContent = 0;
  currentPlayer2.textContent = 0;
  currentPlayer1.textContent = 0;
  dices.classList.add("hidden");
  main.classList.remove("jugador-ganador");
  section1.classList.add("jugador-activo");
  activePlayer = 1;
}

function switchPlayer() {
  if (playing) {
    activePlayer = section1.classList.contains("jugador-activo") ? 2 : 1;
    if (activePlayer === 1) {
      section2.classList.remove("jugador-activo");
      section1.classList.add("jugador-activo");
      currentPlayer1.textContent = 0;
    } else if (
      activePlayer === 2 &&
      section1.classList.contains("jugador-activo")
    ) {
      section1.classList.remove("jugador-activo");
      section2.classList.add("jugador-activo");
      currentPlayer2.textContent = 0;
    }
  }
}

function rollDice() {
  if (playing) {
    if (dices.classList.contains("hidden")) {
      dices.classList.remove("hidden");
    }
    const dice = Math.floor(Math.random() * 6) + 1;

    dices.src = `dice-${dice}.png`;

    if (dice !== 1) {
      current += dice;
      document.querySelector(`.current-${activePlayer}`).textContent = current;
    } else {
      current = 0;
      document.querySelector(`.current-${activePlayer}`).textContent = 0;

      switchPlayer();
    }
  }
}

function hold() {
  if (playing) {
    if (activePlayer === 1) {
      score += current;
      scorePlayer1.textContent = score;
      switchPlayer();
      current = 0;
    } else {
      score2 += current;
      scorePlayer2.textContent = score2;
      switchPlayer();
      current = 0;
    }
    if (score >= 100) {
      scorePlayer1.textContent = `El jugador 1 ha ganado por ${score} puntos... Felicidades`;
      section2.classList.remove("jugador-activo");
      main.classList.add("jugador-ganador");
      playing = false;
      return playing;
    } else if (score2 >= 100) {
      scorePlayer2.textContent = `El jugador 2 ha ganado por ${score} puntos... Felicidades`;
      section2.classList.remove("jugador-activo");
      main.classList.add("jugador-ganador");
      playing = false;
      return playing;
    }
  }
}

btnnew.addEventListener("click", newGame);
btnhold.addEventListener("click", hold);
btnroll.addEventListener("click", rollDice);
