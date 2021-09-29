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
const holdButton = document.querySelector(".btn--hold");

////////////////////---------- STARTING CONDITIONS ----------\\\\\\\\\\\\\\\\\\\\
let currentScore, activePlayer, scores;

scores = [0, 0];
currentScore = 0;
activePlayer = 0;

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

holdButton.addEventListener("click", function () {
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    diceElement.classList.add("hidden");
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
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
