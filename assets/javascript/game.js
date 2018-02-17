// Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
// Use key events to listen for the letters that your players will type.
// Display the following on the page:
// Press any key to get started!
// Wins: (# of times user guessed the word correctly).



// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// As the user guesses the correct letters, reveal them: m a d o _  _ a.



// Number of Guesses Remaining: (# of guesses remaining for the user).
// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// After the user wins/loses the game should automatically choose another word and make the user play it.



// __________________________________________________________________


// Hangman Game Bonuses


// Play a sound or song when the user guesses their word correctly, like in our demo.
// Write some stylish CSS rules to make a design that fits your game's theme.

// HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
// Save your whole game and its properties in an object.
// Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
// Don't forget to place your global variables and functions above your object.


// Remember: global variables, then objects, then calls.


// Definitely talk with a TA or your instructor if you get tripped up during this challenge.



// _______________________________________________________________________________________





// `1. Declare all possible words with an array.







// 2. Write a function that generates a random number based off the length of your array. Use that number to get a value from your array. That value is your random word.




// 3. We need to have each letter of the word written to our html document. Think of a way to split up your random word, and create a container for each word to write to your html document.






// 4. We need an event listener on our keyboard to check if the letter we pressed is contained in our random word.





// 5. If the key pressed is contained in our random word, then we need to reveal the hidden letter. If the key pressed is not contained in our random word, then we need to subtract from our total tries. First make sure that you can reveal a correct guess before trying to count how many mistakes have been made. This will be easier.




// 6. Display a list of correct guesses. If the word contains an A, display on the screen that an was used, and was correct. Make it so that the same letter is not used twice.





// 7. Find a way to check if the game is over. This includes checking if all the letters have been revealed, which will be a win, and checking if the total tries has been used, which will be a loss.




// 8. Track the total number of wins and losses.


// Do some research on the following. Must all be done with JavaScript, no jQuery:

// select an element by ID,
// create a new element,
// append an element,
// select all children elements,
// remove all children elements,
// add a class or id to an element,
// remove a class or id on an element,
// select all elements with the same class.


// All of these will be useful when you are showing the hidden word, revealing the letters, and changing the word, as well as updating the wins and losses.




// 1-The game will have some wordlist to selct word from
// 2-the game will only selct words from wordlist
//3-there will be on screen image persenting any word
//4-All guessed letters will be display on screen
//5-The player doesnt lose by making same mistake
//6-only alphabets are choosable

//1.1 selct the word randomly the show blanks on screen

//2.2guess letter -review the guess-add guess-update

//3.3 see win-lose statuse-review live left-confirm win/lose




// _____________________________START___________________________//


// words list

var legends = [
    "Benyamin-Rogie",
    "Roselin Franklin",
    "Albert Enistein",
    "Erwin Shrondinger",
    "ruthefer",
    "Nicola Tesla",
    "Marie Curi",
    "Max Plank",
    "Avagadro",
    "Neil Bohr",
    "Heisenberg",
    "Kepler",
    "Galileo",
    "Issac Newton"

];
// ____________________ Needed variables ______________________________________

messages = {
    win: 'You win!',
    lose: 'Game over!',
    guessed: ' already guessed, please try again...',
    validLetter: 'Please enter a letter from A-Z'
};
var lives = 6;
var x ="";





// ___________________ picking random a Legend _________________________________________________________



let randomLegend = legends[Math.floor(Math.random() * legends.length)].toUpperCase();




// _______________________________________split The random Pick_________________________


let lettersOfLegends = randomLegend.split("");
 
 console.log(lettersOfLegends);
   

//  ________________________for loop for letters of each legend_________________________________

for (i = 0; i < lettersOfLegends.length; i++){
    console.log(lettersOfLegends[i]);
}
// __________________________________Generate key input_________________________


function myFunction(event) {

    document.getElementById("demo").innerHTML = "The pressed key was";
    

   
   
   
}












