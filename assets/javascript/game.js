var nickShows = ["catdog", "rockos", "allthat", "rugrats", "heyarnold", "angrybeavers", "renandstimpy", "doug", "spongebob", "rocketpower"]
var show;
var wins = 0;
var remainingLetters;
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
	for (var i=0; i < show.length; i++) {
		guessedWord.push("_");
	}
	document.getElementById("word").innerHTML = guessedWord;
}

function displayScore() {
	document.getElementById("letters").innerHTML = "";
	guessLeft = 10;
	wins;
	winFunction();
	guessesLeftFunction();
};

// initialize game
startGame();
displayScore();

document.onkeyup = function(event) {
	var userChoice = event.key.toLowerCase()
	var wordIndex = [];

	for (var i=0; i < show.length; i++) {
		if (userChoice === show[i]) {
			wordIndex.push(i);
		}
	}

	if (wordIndex.length > 0) {
		for (var j=0; j < wordIndex.length; j++) {
			guessedWord[wordIndex[j]] = userChoice
		}
		document.getElementById("word").innerHTML = guessedWord
		remainingLetters -= wordIndex.length
	} else {
		guessLeft--
		guessesLeftFunction();
		document.getElementById("letters").innerHTML += (userChoice + " ");
	};

	wordIndex = [];

	if ((remainingLetters === 0) || (guessLeft === 0)) {
		if (remainingLetters === 0) {
			wins++;
			displayScore();
			startGame();
		} else {
			displayScore();
			startGame();
		}
	};
};


