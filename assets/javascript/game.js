var nickShows = ["catdog", "rockos", "thornberrys", "rugrats", "heyarnold", "angrybeavers", "renandstimpy", "doug", "spongebob", "rocketpower"]
var show;
var wins = 0;
var remainingLetters;
var usedLetters = [];
var guessLeft = 10;
var guessedWord = [];
var guessedLetters = [];

function guessesLeftFunction() {
  return document.getElementById("guesses-left").innerHTML = guessLeft;
}

function winFunction() {
	return document.getElementById("wins").innerHTML = wins;
}

function guessedLetters() {
	return document.getElementById("letters").innerHTML = "";
}

function startGame() {
	show = nickShows[Math.floor(Math.random() * nickShows.length)];
	guessesLeftFunction();
	winFunction();
	remainingLetters = show.length;
	guessedWord = [];
	usedLetters = [];
	for (var i=0; i < show.length; i++) {
		guessedWord.push("_");
	}
	document.getElementById("word").innerHTML = guessedWord.join('  ');
}

function displayScore() {
	document.getElementById("letters").innerHTML = "";
	guessLeft = 10;
	wins;
	winFunction();
	guessesLeftFunction();
};

function lettersOnly(userChoice) {
  if (userChoice.slice(0,3) === "Key") {
  	return true
  }
  return false
}

function displayModal(bool) {
	if (bool === true) {
		var text = "Congrats! You're a Nick Kid! Want to play again?";
		$(".modal-font").text(text);
	} else {
		var text = "Oh no! Better luck next time!";
		$(".modal-font").text(text);
	}

	$('#myModal').modal('show');
};

$(".playAgain").click(function() {
	$('#myModal').modal('hide');
	displayScore();
	startGame();
});

// initialize game
startGame();
displayScore();

document.onkeyup = function(event) {
	var userInput = event.code;
	var checkLetter = lettersOnly(userInput);
	var userChoice = event.key.toLowerCase();
	var wordIndex = [];
	console.log(usedLetters)
	if (checkLetter == true && !usedLetters.includes(userChoice)) {
		for (var i=0; i < show.length; i++) {
      if (userChoice === show[i]) {
              wordIndex.push(i);
      }
		}
		if (wordIndex.length > 0) {
			for (var j=0; j < wordIndex.length; j++) {
			  guessedWord[wordIndex[j]] = userChoice;
			  remainingLetters --;
			}
			document.getElementById("word").innerHTML = guessedWord.join('  ');
		} else {
			guessLeft--;
			guessesLeftFunction();
			document.getElementById("letters").innerHTML += (userChoice + " ");
		}

		usedLetters.push(userChoice);

		if ((remainingLetters === 0) || (guessLeft === 0)) {
			if (remainingLetters === 0) {
				wins++;
				displayModal(true);
			} else {
				displayModal(false);
			}
		}
	} 
};
