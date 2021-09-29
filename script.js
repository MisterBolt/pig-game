"use strict";

// Constant elements
const diceElement = document.querySelector(".dice");
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

// Starting conditions
diceElement.classList.add("hidden");
score0Element.textContent = 0;
score1Element.textContent = 0;
current0Element.textContent = 0;
current1Element.textContent = 0;
