'use strict';

const button = document.querySelector('.js-button');
const userNumberInput = document.querySelector('.js-user-input');

// elementos en los que se imprime la info
const clue = document.querySelector('.js-clue');
const attemptsAlert = document.querySelector('.js-attempts');

//intentos

let attempts = 0;

//número aleatorio

const randomNumber = Math.floor(Math.random() * 101) + 1;
console.log(`Tu número aleatorio es ${randomNumber}`);

//funciones

function compareNumber() {
  const userNumber = userNumberInput.value;
  console.log(`El número del usuario es ${userNumber}`);

  let attemptsCheck = (attempts += 1);
  attemptsAlert.innerHTML = `${attemptsCheck} intentos`;
  console.log(`Número de intentos ${attemptsCheck}`);

  if (userNumber < 1) {
    console.log('El número debe estar entre 1 y 100.');
    clue.innerHTML = 'El número debe estar entre 1 y 100.';
  } else if (userNumber > 100) {
    console.log('El número debe estar entre 1 y 100.');
    clue.innerHTML = 'El número debe estar entre 1 y 100.';
  } else if (userNumber < randomNumber) {
    console.log('Es menor');
    clue.innerHTML = '¡Demasiado bajo!';
  } else if (userNumber > randomNumber) {
    console.log('Es mayor');
    clue.innerHTML = '¡Demasiado alto!';
  } else {
    console.log("It's a match!");
    clue.innerHTML = '¡Has ganado campeona!';
  }
}

button.addEventListener('click', compareNumber);
