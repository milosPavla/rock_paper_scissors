/* Function expression which uses Math.random to generate number between 0 and 2
flooring it to clean number. According to value of that number stored in index variable, we have if
statement that returns certain string  */
let getComputerChoice = () => {
    let index = Math.floor(Math.random() * 3);
    if(index === 0) {
        return "rock";
    } else if(index === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* Function that gets input by user using prompt window */
let getPlayerChoice = () => prompt("Type in your choice (rock, paper, scissors): ");

/* One cicle of game checking if inputs are same, if not, then it checks if inputs are so that
player has won. Everything else that isn't one of these conditions above are considered defeat */
let playRound = (player, computer) => {
    if (player == computer) {
        alert("It's a tie! Play on!");
    } 
    else if ( (player == 'rock' && computer == 'scissors') || 
        (player == 'paper' && computer == 'rock') || 
        (player == 'scissors' && computer == 'paper') ) {
        alert('Player has won!');
    } 
    else {
        alert('Computer has won!');
    }
}
    
/* Storing functions outputs to variables, writing it to console and calling one round of game */
let computerSelection = getComputerChoice();
let playerSelection = getPlayerChoice();
console.log(computerSelection);
console.log(playerSelection);
playRound(playerSelection, computerSelection);

