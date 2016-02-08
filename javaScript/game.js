//create secretNumber
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("guess a number");
var guess = Number(stringGuess);
//check guess
if(guess === secretNumber) {
  alert("you got it right");
}
else if(guess > secretNumber) {
  alert("too high");
}
else {
  alert("too low, guess again");
}
