let word = prompt("Welcome to Hangman! Player 1, please enter a word for Player 2 to guess.").toUpperCase();

// note the switch toUpperCase(), we want to always work in upper case letters to avoid confusing 'a' and 'A' as unequal.

let revealedLetters = new Array(word.length); // creates an array with as many elements as word has characters. Each index of revealedLetters will correspond to a character in word, and if revealedLetters[n] is truthy, then word[n] has been correctly guessed.
revealedLetters.fill(false);

const maxStrikes = 6;
let strikes = 0; // the number of incorrect guesses made so far

let strikeLetters = new Array(maxStrikes); // this will contain every letter that has been incorrectly guessed.

function processGuess() {
    // let guess = // the value of the <form>'s <input> element, toUpperCase()!

    let guess = document.getElementById('userInput').val

    if (strikes < maxStrikes) {
        // game logic goes here
        strikeLetters.indexOf(guess) === -1 ? strikeLetters.push(guess) : null
        
        for (let i = 0; i < word.length; i++) {
            if (word[i] == (guess)) {
                revealedLetters.replace(revealedLetters[i], word[i])
                checkWin()
            } else {
                strikes++
                drawGallows()
                checkLose()
            }
        }
    } else {
        alert('The word was: ' + word + '\n' + 'Game Over!!!')
    }


}

function checkWin() {
    if (revealedLetters === word) {
        alert('You Won!!!')
    }
}

function checkLose() {
    if (strikes === maxStrikes) {
        alert('The word was: ' + word + '\n' + 'Game Over!!!')
    }
}

// Manipulates the DOM to write all the strike letters to the appropriate section in hangman.html
function drawStrikeLetters() {
    // your DOM manipulation code here
    // should create a String from strikeLetters and put that into the content of some element.
    document.getElementById('strikes').innerHTML = document.getElementById('guess').toUpperCase().val
}

// Manipulates the DOM to write the successfully guessed letters of the word, replacing them with dashes if not yet guessed
function drawWordProgress() {
    // your DOM manipulation code here
    // should iterate over revealedLetters, and if the value at each index is truthy, print the corresponding letter from word. Otherwise, it should print a -.
    let lines = " _ "
    let i = word.length
    revealedLetters = lines.repeat(i)
    document.getElementById('word').innerHTML = revealedLetters
}

// Manipulates the DOM to update the image of the gallows for the current game state.
function drawGallows() {
    // your DOM manipulation code here 
    // should update an <img> element in the appropriate hangman.html section to point to "images/strike-"+strikes+".png"
    document.getElementById('gallows').src = "images/strike-" + strikes + ".png"
}






drawWordProgress();
processGuess()
 // run this now, to draw the empty word at the start of the game.