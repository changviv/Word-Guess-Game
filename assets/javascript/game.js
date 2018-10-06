
// Array list of shows
var nickShows = ["catdog", "rockos", "allthat", "rugrats", "heyarnold", "angrybeavers", "renandstimpy", "doug", "spongebob", "rocketpower"]

// generates one random show
var show;
var wins = 0
var remainingLetters;
var guessLeft = 10
var guessedWord = [];
var guessedLetters = [];


function guessesLeftFunction() {
  return document.getElementById("guesses-left").innerHTML = guessLeft
}

function winFunction() {
	return document.getElementById("wins").innerHTML = wins
}

function startGame() {
	guessesLeftFunction();
	winFunction()
	show = nickShows[Math.floor(Math.random() * nickShows.length)];
	console.log("the show name: " + show)
	remainingLetters = show.length
	guessedWord = [];
	for (var i=0; i < show.length; i++) {
		guessedWord.push("_")
	}
	return document.getElementById("word").innerHTML = guessedWord
}

function displayScore() {
	document.getElementById("letters").innerHTML = ""
	guessLeft = 10;
	wins;
	winFunction();
	guessesLeftFunction();
};


function guessedLetters() {
	return document.getElementById("letters").innerHTML = "";
}



// initialize game
startGame();
displayScore();

document.onkeyup = function(event) {
	var userChoice = event.key.toLowerCase()
	var wordIndex = [];
	var new_index;

	for (var i=0; i < show.length; i++) {
		if (userChoice === show[i]) {
			wordIndex.push(i);
		}
	}

	if (wordIndex.length > 0) {
		for (var j=0; j < wordIndex.length; j++) {
			new_index = wordIndex[j]
			guessedWord[new_index] = userChoice
		}
		document.getElementById("word").innerHTML = guessedWord
		remainingLetters -= wordIndex.length
	} else {
		guessLeft--
		guessesLeftFunction()
		document.getElementById("letters").innerHTML += (userChoice + " ")
	};

	wordIndex = [];

	if ((remainingLetters === 0) || (guessLeft === 0)) {
		if (remainingLetters === 0) {
			wins++;
			displayScore()
			startGame()
		} else {
			displayScore();
			startGame();
		};
	}

};


