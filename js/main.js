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

// esta coge el número del usuario y lo imprime en la consola
function getUserNumber() {
  const userNumber = userNumberInput.value;
  console.log(`El número que elige el usuario es ${userNumber}`);
}

function compareNumber() {
  const userNumber = userNumberInput.value;
  let attemptsCheck = (attempts += 1);
  console.log(userNumber);

  if (userNumber === randomNumber) {
    return console.log("It's a match!");
    clue.innerHTML = '¡Has ganado campeona!';
  } else if (userNumber <= randomNumber) {
    return console.log('Es menor');
    clue.innerHTML = '¡Demasiado bajo!';
  } else if (userNumber >= randomNumber) {
    return console.log('Es mayor');
  }
}

button.addEventListener('click', compareNumber);
