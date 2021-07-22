const x = 7

const buttons = document.querySelectorAll('.buttons');
var buttonsArray = Array.from(buttons);

//Create a variable for round (use PlayerWins, ComputerWins)
var playerWins = 0;
var computerWins = 0;

buttonsArray.forEach(button => {
    //add an event listener to each button, waiting for a click 
    button.addEventListener('click', ()=> {
    //Make player selection (ps) into what the player has chosen 
    var ps = button.textContent;
    
    //Create const for the results div 
    const results = document.querySelector('#results');
    
    
    
console.log("player is " + ps);
const cs = computerPlay();
console.log("computer is " + cs);


if (
    //Player win 
    //Cases where the player wins 
    ps === "rock" && cs === "scissors" ||
    ps === "scissors" && cs === "paper" ||
    ps === "paper" && cs === "rock" ) {
    //Update tally (playerWins increasing by 1)
    playerWins = playerWins + 1;
    //Win message 
    results.textContent = "The Player has won this round! Player: " + playerWins + " Computer: " + computerWins;
    console.log("The player has won this round");
    //check if player has won
    if (playerWins === 5){
        results.textContent = "The Player is the first to reach 5 and has won";
        console.log("The Player is the first to reach 5 and has won");
    }

    
    } else if (
    //Player loss
    //Cases where the player loses
    cs === "rock" && ps === "scissors" || 
    cs === "scissors" && ps === "paper" || 
    cs === "paper" && ps === "rock" ) {
    //Update tally (computerWins increasing by 1)
    computerWins = computerWins + 1;    
    //Loss message 
    results.textContent = "The Computer won this round! Player: " + playerWins + " Computer: " + computerWins;
    console.log("The computer has won this round");
    //check if the computer has won 
    if (computerWins === 5){
        results.textContent = "The Computer is the first to reach 5 and has won";
        console.log("The Computer is the first to reach 5 and has won");
    }


    } else if (
    //Player draw 
    //Cases where the game is a draw
    cs === "rock" && ps === "rock" ||
    cs === "scissors" && ps === "scissors" ||
    cs === "paper" && ps === "paper" ) {
    //Draw message
    results.textContent = "This round was a draw! Player: " + playerWins + " Computer: " + computerWins
    console.log("This round was a draw");
    };
    })
});

//Function to give the computer selection
computerPlay = () => {
//The options that the computer can choose from
const options = ["rock", "paper", "scissors"];
//console.log(options);
//Computer randomly choosing one of the options. Math.random to get a random number from 0 to 1, e.g. 0.53, 
//multiplied by 3, e.g. 0.53 * 3 = 1.59
//Math.floor gives returns largest integer, less than or equal to that number. So 1.59 returns 1. 
const random = Math.floor(Math.random() * options.length);
//console.log(random);
//Choose and return that value from the options array
computerSelection = options[random];
//console.log(computerSelection); 
return computerSelection }


//Function to play a single round of rock, paper scissors
playRound = () => {

//Prompt for playerSelection
getPlayerSelection = () => {
var playerSelection = prompt("enter your choice", "rock, paper, or scissors");
//Make playerSelection all lower case 
var playerSelectionLower = playerSelection.toLowerCase();
//If not rock, paper, or scissors, show error and ask again 
if (playerSelectionLower === "rock" || playerSelectionLower === "paper" || playerSelectionLower === "scissors") {
    alert("you have chosen " + playerSelectionLower)
return playerSelectionLower; }
    else { alert(playerSelectionLower + " is NOT one of the options") 
return "incapable of selecting one of the 3 options"; } }

//Show who has picked which selection
//const ps = getPlayerSelection();
console.log("ps is " + ps);
const cs = computerPlay();
console.log("cs is " + cs);

//Use if else to compare selections and return player win, loss or draw

if (
//Player win 
//Cases where the player wins 
ps === "rock" && cs === "scissors" ||
ps === "scissors" && cs === "paper" ||
ps === "paper" && cs === "rock" ) {
//Win message 
console.log("The Player has won!")
//Update tally (Wins increasing by 1)
tallyOfWins = tallyOfWins + 1;

} else if (
//Player loss
//Cases where the player loses
cs === "rock" && ps === "scissors" || 
cs === "scissors" && ps === "paper" || 
cs === "paper" && ps === "rock" ) {
//Loss message 
console.log("The Computer won this round!")

} else if (
//Player draw 
//Cases where the game is a draw
cs === "rock" && ps === "rock" ||
cs === "scissors" && ps === "scissors" ||
cs === "paper" && ps === "paper" ) {
//Draw message
console.log("This round was a draw!")
};
}

//Game function for a 5 round game 
game = () => {
for (let i = 1; i <= 5; i++) {
    //Tell them which round it is
    console.log("Round " + i);
    //Play the round
    playRound();
}
//End statement to show how many the player won out of 5
return console.log("You won " + tallyOfWins + " out of 5!")
}
