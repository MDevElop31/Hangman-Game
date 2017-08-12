/* 
Create different words for the user to guess so that they aren't guessing the same word every time.
Set up a basic website with underscores that show how many letters are in the word and what letters the user guessed.
Have the computer choose a word at random when the site is loaded.
Make it so that as the user types a letter, it will appear on the screen.
If the letter is correct, it will appear on one of the underscores.
If the letter is incorrect, it will appear in the guessed letters section.
Every time a letter is guessed incorrectly, the number of guesses remaining decrements by 1.
Make it so the user can only type a specific letter once, and any further key presses of that letter will not affect the guesses remaining.
If the word is completed, a win will increment and the game will reset and choose a word at random.
If the number of guesses remaining = 0, a loss will increment and the game will reset and choose a word at random.
*/




var words = ["Diplodocus", "Tyrannosaurus", "Baryonyx", "Troodon", "Deinocheirus", "Saltasaurus"];

var randomWord = "";
var wins = 0;
var guesses = 13;
var guessedLetters = [];

var answerArray = [];

function init(){
	randomWord = words[Math.floor(Math.random() * words.length)];

	answerArray = [];
	for (var i = 0; i < randomWord.length; i++) {
		answerArray[i] = "_";
	}
	
	console.log(randomWord);
}

init();

document.onkeyup =function() {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		var showThisMessage = "";
		guessedLetters.push(userGuess);

		console.log(userGuess);

        var i=0;
        for (i = 0; i < words.length; i++) {
            
            if (words[i] === userGuess) {
                answerArray[i] === userGuess;
            }
        }
    
        var remainingLetters = answerArray.length;
        
        for (i = 0; i < answerArray.length; i++) {
            
            if (answerArray[i] !== '_') {
                remainingLetters--;
            }
        }

        if (words[i] !== userGuess) {
            answerArray[i] !== userGuess;
            guesses--;
        }
    
        if (remainingLetters == 0) {
            wins++;
            resetGame();
        }
    
        if (guesses === 0) {
        	resetGame();
        }

        
        var html = "<p>Wins: " + wins + "<p>" +
		"<p>Number of Guesses Remaining: " + guesses + "<p>" +
		"<p>Letters Already Guessed: " + guessedLetters.join(', ') + "<p>";

	document.querySelector("#gameStats").innerHTML = html;

	document.getElementById("answer").innerHTML = answerArray;
  }
  
  function resetGame() {
	guesses = 13;
	guessedLetters = [];
	randomWord = words[Math.floor(Math.random() * words.length)];
	console.log("Word to guess: " + randomWord);
}








