"use strict";

////////////////////---------- SELECTING ELEMENTS ----------\\\\\\\\\\\\\\\\\\\\
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

const diceElement = document.querySelector(".dice");
const rollButton = document.querySelector(".btn--roll");

////////////////////---------- STARTING CONDITIONS ----------\\\\\\\\\\\\\\\\\\\\
let currentScore = 0;
let activePlayer = 0;

diceElement.classList.add("hidden");
score0Element.textContent = 0;
score1Element.textContent = 0;
current0Element.textContent = 0;
current1Element.textContent = 0;

////////////////////---------- BUTTONS FUNCTIONALITY ----------\\\\\\\\\\\\\\\\\\\\
rollButton.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceElement.src = `images/dice-${dice}.png`;
  diceElement.classList.remove("hidden");

  if (dice !== 1) {
    currentScore += dice;
    displayCurrentScore();
  } else {
    switchPlayer();
  }
});

////////////////////---------- AUXILIARY FUNCTIONS ----------\\\\\\\\\\\\\\\\\\\\
function displayCurrentScore() {
  if (activePlayer === 0) {
    current0Element.textContent = currentScore;
  } else {
    current1Element.textContent = currentScore;
  }
}

function switchPlayer() {
  currentScore = 0;
  displayCurrentScore();
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle("player--active");
  player1Element.classList.toggle("player--active");
}
