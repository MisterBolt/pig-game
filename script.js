"use strict";

////////////////////---------- SELECTING ELEMENTS ----------\\\\\\\\\\\\\\\\\\\\
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const winner0Element = document.getElementById("winner--0");
const winner1Element = document.getElementById("winner--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

const diceElement = document.querySelector(".dice");
const rollButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");
const newButton = document.querySelector(".btn--new");

const modalOverlay = document.querySelector(".overlay");
const modalWindow = document.querySelector(".modal");
const yesModalButton = document.getElementById("yes-modal-button");
const noModalButton = document.getElementById("no-modal-button");

////////////////////---------- STARTING CONDITIONS ----------\\\\\\\\\\\\\\\\\\\\
let currentScore, activePlayer, scores, playing;

init();

////////////////////---------- BUTTONS FUNCTIONALITY ----------\\\\\\\\\\\\\\\\\\\\
newButton.addEventListener("click", toggleModal);

yesModalButton.addEventListener("click", init);
noModalButton.addEventListener("click", toggleModal);

rollButton.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceElement.src = `images/dice-${dice}.png`;
    diceElement.classList.remove("hidden");

    if (dice !== 1) {
      currentScore += dice;
      displayCurrentScore();
    } else {
      switchPlayer();
    }
  }
});

holdButton.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;

      diceElement.classList.add("hidden");
      rollButton.classList.add("hidden");
      holdButton.classList.add("hidden");
      newButton.textContent = "🔄 New game";
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document.getElementById(`winner--${activePlayer}`).classList.remove("hidden");
    } else {
      switchPlayer();
    }
  }
});

////////////////////---------- AUXILIARY FUNCTIONS ----------\\\\\\\\\\\\\\\\\\\\
function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  toggleModal();
  diceElement.classList.add("hidden");
  winner0Element.classList.add("hidden");
  winner1Element.classList.add("hidden");
  rollButton.classList.remove("hidden");
  holdButton.classList.remove("hidden");
  newButton.textContent = "🔄 Reset game";
  player0Element.classList.remove("player--winner");
  player1Element.classList.remove("player--winner");
  player0Element.classList.add("player--active");
  player1Element.classList.remove("player--active");
}

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

function toggleModal() {
  modalOverlay.classList.toggle("hidden");
  modalWindow.classList.toggle("hidden");
}
