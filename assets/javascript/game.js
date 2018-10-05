
// Array list of shows
var nickShows =
    [
    	"catdog",
     	"rockos",
     	"allthat",
     	"rugrats",
     	"heyarnold",
			"angrybeavers",
			"renandstimpy",
			"doug",
			"spongebob",
			"rocketpower"
		]

// generates one random show
var show = nickShows[Math.floor(Math.random() * nickShows.length)];
var wins = 0
var remainingLetters = show.length
var guessLeft = 10
var guessedWord = [];
var guessedLetters = [];


function guessesLeftFunction() {
  return document.getElementById("guesses-left").innerHTML = guessLeft
}

function winFunction() {
	return document.getElementById("wins").innerHTML = wins
}

function displayScore() {
	document.getElementById("letters").innerHTML = ""
	guessLeft = 10;
	winFunction();
	guessesLeftFunction();
};

function startGame() {
	show;
	console.log(show);
	guessedWord = [];
	for (var i=0; i < show.length; i++) {
		guessedWord.push("_")
	}
	return document.getElementById("word").innerHTML = guessedWord
};

function nextLetter() {
	wordIndex = [];
}


function guessedLetters() {
	return document.getElementById("letters").innerHTML = "";
}



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
		remainingLetters -= wordIndex.length
		console.log(remainingLetters);
		for (var j=0; j < wordIndex.length; j++) {
			var new_index = wordIndex[j]
			guessedWord[new_index] = userChoice
		}
		return document.getElementById("word").innerHTML = guessedWord
	} else {
		guessLeft--
		guessesLeftFunction()
		document.getElementById("letters").innerHTML += (userChoice + " ")
	};
	nextLetter();

	// it keeps printing the same show and the remaining letters keep going negative

	if (remainingLetters === 0) {
		wins++
		winFunction();
		displayScore();
		startGame();
		remainingLetters == show.length;
	} else if (guessLeft === 0) {
		displayScore();
		startGame();
	};

};


