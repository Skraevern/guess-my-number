"use strict"
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `Correct Number!`
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23
console.log(document.querySelector(`.guess`).value);
*/

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 10;
let highScore = 0;
let guess

const displayMessage = function(message) {
    document.querySelector(`.message`).textContent = message;
}
const setBackgroundColor = function(backgroundColor) {
    document.querySelector(`body`).style.backgroundColor = backgroundColor;
}
const displaySecretNumberAs = function(secretNumber) {
    document.querySelector(`.number`).textContent = secretNumber;
}
const displayScoreNumberAs = function(scoreNumber) {
    document.querySelector(`.score`).textContent = scoreNumber;
}
const displayHigscoreNumberAs = function(highScoreNumber) {
    document.querySelector(`.highscore`).textContent = highScoreNumber
    
}

document.querySelector(`.check`).addEventListener(`click`, function() {
    guess = Number(document.querySelector(`.guess`).value);

    // When there is no imput
    if (!guess){
        displayMessage(`No number! Try again!`);
    
    // When number is correct
    } else if (guess === secretNumber) {
        displayMessage(`Correct Number!`);
        setBackgroundColor(`#60b347`);
        displaySecretNumberAs(secretNumber);
        document.querySelector(`.number`).style.width = `50rem`
        if(score > highScore){
            highScore = score;
            displayHigscoreNumberAs(highScore);
        }
    
    // if number is avove 20 or lower than 0
    } else if (guess > 20 || guess < 0) {
        displayMessage(`Wrong number. Input number between 1 and 20`);
    
        // when guess is wrong DRY version
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
        score--
        displayScoreNumberAs(score);
        } else {
            displayMessage(`You loose!`);
            displayScoreNumberAs(0);
            setBackgroundColor(`rgb(255, 0, 0)`);
            displaySecretNumberAs(`X`);
        }
    }
});

document.querySelector(`.again`).addEventListener(`click`, function() {
    score = 10
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displaySecretNumberAs(`?`);
    displayMessage(`Start guessing...`);
    displayScoreNumberAs(score);
    setBackgroundColor(`#222`);
    document.querySelector(`.number`).style.width = `15rem`
    document.querySelector(`.guess`).value = ``; 
})
