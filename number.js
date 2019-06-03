var secretNumber = 4;
const colors = ['blue','green','black','purple','orange','red','brown','violet','yellow','indigo'];

function colorGuess(colors){
  for(var i = 0; i <= colors.length; i++){
    if(prompt("Whats your favorite color?") === colors[i]){
      prompt("Whats the air speed velocity of a laiden swallow?")
    }
  }
}

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);


if(guess === secretNumber) {
  alert("YOU GOT IT RIGHT!!")
} else if(guess > secretNumber) {
  alert("Too high. Guess again!")
} else {
  alert("Too low. Guess again!")
}
