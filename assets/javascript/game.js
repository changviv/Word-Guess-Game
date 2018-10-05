
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



// when a letter is typed - compare this letter to each character of the word
// //create a for loop to match letter = each letter of word

// if the letter matches with a character in the word - save the index position
// 	//if matches
// 	//save the index position
// 		create an array to save the value position

// 	// the guessedWord array will replace _ with the letter of the user Choice
// 	replace the guessed Word's index position with that of the user Choice



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
			var new_index = wordIndex[j]
			guessedWord[new_index] = userChoice
		}
		return document.getElementById("word").innerHTML = guessedWord
	}
	else {
		guessLeft--
		guessesLeftFunction()
		document.getElementById("letters").innerHTML += (userChoice + " ")



}

	// else if {
	// 	for (var k=0; k < guessWord.length; k++) {
	// 		if (guessedWord[k] !== "_") {
	// 			winScore++
	// 			winFunction()
	// 			resetGame()
	// 		}
	// 	}
	//
	nextLetter();

}

	// if (guessLeft === 0) {
	// 		show
	// 		startGame();
	// 		// this is printing out the same show how does it randomize?
	// 	} else if {
	// 		for (var k = 0; k < show.length; i++) {
	// 				if (show[i] !== "-") {
	// 					alert("you won!")
	// 				}
	// 		}
	// 		winScore++
	// 		winFunction();
	// 		startGame();

	// 	}
	// }


