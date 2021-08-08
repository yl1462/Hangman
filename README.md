VIEW CALENDAR Project #3: Hangman
As you wrap up with JavaScript, let's put together everything you've learned to make the classic game "Hangman" in a webpage.

If you are unfamiliar with the rules of Hangman, the game works like this:

A gallows is drawn on a surface, and Player 1 chooses a word that player 2 must guess.
Empty dashes for each letter in the word are drawn next to the gallows (so a 7-letter word means 7 dashes).
Each round, player 2 guesses a letter that might belong in the word.
If the word contains one or more instances of the guessed letter, the dashes corresponding to the guessed letter are replaced with the guessed letter.
If the word contains no instances of the guessed letter, a limb of a person is drawn on the gallows. This is a "strike", and the letter is recorded as such.
When a complete stick-figure person is drawn on the gallows, player 2 loses and player 1 wins. If the word is guessed completely before that happens, player 2 wins.
When a complete stick-figure person is drawn on the gallows, player 2 loses and player 1 wins. If the word is guessed completely before that happens, player 2 wins.
Instructions
Instructor Note: you are stongly encouraged to work with your fellow students on this project. Don't be afraid to ask questions, and don't hesitate to give an answer if you know it!
Download the template for the project, Hangman.zip and extract it.
First, create an HTML page, "hangman.html" as follows:
The page should be divided into four sections
A gallows section that will display a picture of the gallows and hanged man in stages.
A strikes section that will display incorrect guesses.
A word section that will show the word to guess as it is slowly revealed.
A guess section that will contain a form where the player can type in their guess each round.
Note that the template comes with 7 images you can use for the gallows section, corresponding to the number of Strikes accrued.
Make sure the elements in hangman.html have IDs that will make them easier to select with CSS and JavaScript later - this game will be driven by event management and DOM manipulation.
The logic for this game will be fairly complex compared to everything you've done so far, but all of it should be familiar.

The first thing you'll need to do in your JavaScript is create some variables that will track the game's state (and we can grab the word to guess at the same time!).

et word = prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.").toUpperCase();

// note the switch toUpperCase(), we want to always work in upper case letters to avoid confusing 'a' and 'A' as unequal.

let revealedLetters = new Array(word.length); // creates an array with as many elements as word has characters. Each index of revealedLetters will correspond to a character in word, and if revealedLetters[n] is truthy, then word[n] has been correctly guessed.
revealedLetters.fill(false);

const maxStrikes = 6; 
let strikes = 0; // the number of incorrect guesses made so far

let strikeLetters = new Array(maxStrikes); // this will contain every letter that has been incorrectly guessed.

Now, it may seem like you're skipping ahead here, but it will be easiest to do this step now. Create the following functions:

drawWordProgress(); // run this now, to draw the empty word at the start of the game.

// Manipulates the DOM to write all the strike letters to the appropriate section in hangman.html
function drawStrikeLetters() {
    // your DOM manipulation code here
    // should create a String from strikeLetters and put that into the content of some element.
}

// Manipulates the DOM to write the successfully guessed letters of the word, replacing them with dashes if not yet guessed
function drawWordProgress() {
    // your DOM manipulation code here
    // should iterate over revealedLetters, and if the value at each index is truthy, print the corresponding letter from word. Otherwise, it should print a -.
}

// Manipulates the DOM to update the image of the gallows for the current game state.
function drawGallows() { 
    // your DOM manipulation code here 
    // should update an <img> element in the appropriate hangman.html section to point to "images/strike-"+strikes+".png"
}

 Next you'll need to attach an event listener to the <form> element in hangman.html. When the form is submitted, you'll need to invoke a function named "processGuess()":

function processGuess() {
    let guess = // the value of the <form>'s <input> element, toUpperCase()!

    if (strikes < maxStrikes) {
        // game logic goes here
    } else
        alert("The game is over!"); 
}

 

Now what should this game logic be?

First, you'll want to check to see if the word includes() the guessed letter.
If it does... 
You'll need to loop over word. If the letter at a given index in word matches the guess, set the corresponding index of revealedLetters to a truthy value.
Then you'll need to invoke drawWordProgress() to show the updated word
If it doesn't...
Increment the number of strikes
Add the guessed letter to strikeLetters.
invoke drawGallows() and drawStrikeLetters()
Now you need to check if player 2 won. To do that, iterate over revealedLetters. If none of the values are false, player 2 wins!
These instructions are obviously not comprehensive, and you will of course have to fill in the gaps on your own (or with your peers). One of the things that makes programming fun and addictive is that you can always make improvements somewhere!
