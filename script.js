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
player has won. Everything else that isn't one of these conditions above are considered defeat
Output of this function returns string of winner  */
let playRound = (player, computer) => {
    if (player == computer) {
        return 'tie';
    } 
    else if ( (player == 'rock' && computer == 'scissors') || 
        (player == 'paper' && computer == 'rock') || 
        (player == 'scissors' && computer == 'paper') ) {
        return 'player';
    } 
    else {
        return 'computer';
    }
}

/* Core function of game has two main variables which are used to store score of both contributors.
Game goes through five cycles in which player chooses between 3 options and tries to beat computer.
Every cycle, variables get new values from choice functions and compares them in IF function.
As playRound() returns winner of cycle, program compares winner string with 'player' or 'computer'
and according to that, points to score are added. In the end, winner is shown on alert window.
 */
let game = () => {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i ++) {
        let player = getPlayerChoice();
        let computer = getComputerChoice();

        console.log(player);
        console.log(computer);

        if(playRound(player, computer) == 'player') {
            playerScore++;
        } else if(playRound(player, computer) == 'computer') {
            computerScore++;
        }
        
        console.log('Player score: ' + playerScore);
        console.log('Computer score: ' + computerScore);
    }

    if(playerScore > computerScore) {
        alert('Player has won!');
    } else if(playerScore < computerScore) {
        alert('You have been defeated!');
    } else {
        alert('It is a tie score! Restart this page to play again.')
    }
}

/* Calling game function */
game();
    


