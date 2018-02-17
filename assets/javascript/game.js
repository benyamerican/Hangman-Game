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






// ___________________ picking random a Legend _________________________________________________________



let randomLegend = legends[Math.floor(Math.random() * legends.length)].toUpperCase();




// _______________________________________split The random Pick_________________________


var lettersOfLegends = randomLegend.split("");
 
//  console.log(lettersOfLegends);
   

//  ________________________for loop for letters of each legend_________________________________

// for (i = 0; i < lettersOfLegends.length; i++){
//     console.log(lettersOfLegends[i])};
// 

// __Generate  start key and Call a legend _show blank as element length___make hint button availabe______
// ______________________________________________

const userStartsTheGame = document.getElementById("PressingKey");

var answerArray = [];
 for (var i = 0; i < randomLegend.length; i++) {
    answerArray[i] = " _ ";
 
}



document.addEventListener("keyup", startGame);function startGame(){
    for (i = 0; i < lettersOfLegends.length; i++){
        userStartsTheGame.textContent = "Guess the Legend "  +
         answerArray;  
}
};



// _____________________________________ guessing The letters__________________________________________________


document.onkeyup = function guessedLetters(){

    var userGuess = event.key;
    // console.log(userGuess);
    // __________________________________right or wrong key pressed alert__________________________________

var keyPressed = event.keyCode; 
if (keyPressed >= 65 && keyPressed <= 122 ) {

    console.log("keep Going");
}
else {
    console.log("What are you doing? Choose a letter idiot!");
}
}
  
//    ______________________________________End Of Guessing Letters Function______________________



// ___________________________________________REMOVE CHOOsEN ELEMENT________________




// _____________________________________



// ___________________________________Pussh guess characters in____________
// ___________________________count down the lives_______________________

// _______________________If all guesses are corect add one to wins and move to the next legend___________


//________________________________________if lives goes to zero add one to loses_____________















