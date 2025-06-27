const scorePlayer1 = document.querySelector(".score-player1");
const scorePlayer2 = document.querySelector(".score-player2");
const currentPlayer1 = document.querySelector(".current-player1");
const currentPlayer2 = document.querySelector(".current-player2");
const btnnew = document.querySelector(".new");
const btnroll = document.querySelector(".roll");
const btnhold = document.querySelector(".hold");
let dice = document.querySelector(".dices");
const section1 = document.querySelector(".left");
const section2 = document.querySelector(".right");

let activePlayer;

function newGame() {
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentPlayer2.textContent = 0;
  currentPlayer1.textContent = 0;
  dice.classList.add("hidden");
}

function switchPlayer() {
  activePlayer = section1.classList.contains("jugador-activo") ? 1 : 2;
  if (activePlayer === 1) {
    section1.classList.remove("jugador-activo");
    section2.classList.add("jugador-activo");
  } else if (
    activePlayer === 2 &&
    section2.classList.contains("jugador-activo")
  ) {
    section2.classList.remove("jugador-activo");
    section1.classList.add("jugador-activo");
  }
}

function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
  dice.scr = `dice-${dice}.png`;
}

btnnew.addEventListener("click", newGame);
btnhold.addEventListener("click", switchPlayer);
btnroll.addEventListener("click", rollDice);
