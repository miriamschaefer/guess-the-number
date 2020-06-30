'use strict';

const button = document.querySelector('.js-button');
const userNumberInput = document.querySelector('.js-user-input');

// elementos en los que se imprime la info
const clue = document.querySelector('.js-clue');
const attemptsAlert = document.querySelector('.js-attempts');

//intentos

let attempts = {};

//número aleatorio

const randomNumber = Math.floor(Math.random() * 101) + 1;
console.log(`Tu número aleatorio es ${randomNumber}`);

//funciones

function getUserNumber() {
  const userNumber = userNumberInput.value;
  console.log(`El número que elige el usuario es ${userNumber}`);
}

userNumberInput.addEventListener('keyup', getUserNumber);
// button.addEventListener('click'; checkNumber);
