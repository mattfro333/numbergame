var secretNumber = 4;

var guess = Number(prompt("Guess a number"));

alert(guess);

if(guess === secretNumber) {
  alert("YOU GOT IT RIGHT!!")
} else if(guess > secretNumber) {
  alert("Too high. Guess again!")
} else {
  alert("Too low. Guess again!")
}
