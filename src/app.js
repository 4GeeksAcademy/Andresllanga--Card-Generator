/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let palos = ["♥", "♦", "♠", "♣"];
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomNumeros = numeros[Math.floor(Math.random() * numeros.length)];
  let randomPalos = palos[Math.floor(Math.random() * palos.length)];

  let card = document.getElementById("card");
  let suitTop = document.getElementById("suit-top");
  let number = document.getElementById("number");
  let suitBottom = document.getElementById("suit-bottom");

  if (randomPalos === "♥" || randomPalos === "♦") {
    card.className = "card heart";
  } else {
    card.className = "card";
  }

  number.innerHTML = randomNumeros;
  suitTop.innerHTML = randomPalos;
  suitBottom.innerHTML = randomPalos;
};
