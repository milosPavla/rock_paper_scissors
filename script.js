function getComputerChoice() {   // Returns random choice by computer
    let index = Math.floor(Math.random() * 3);
    switch (index) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            break;
    }
}

function compareInputs(player, computer) { // Returns winner by comparing choices
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

function checkScore() {     // Sets current score to scoreboard, tests if score has hit five, if so, triggers pop window with desired message and resets score to zero
    document.querySelector('#player-score').innerText = playerScore;
    document.querySelector('#computer-score').innerText = computerScore;

    if(playerScore > 4 || computerScore > 4) {
        document.querySelector('.info-box').classList.add('show');
        document.querySelector('.info-box').innerHTML = `<h1>${playerScore > 4 ? 'You have won!' : 'You have been defeated!'}</h1>`
        document.querySelector('body').style.opacity = '0.6';

        playerScore = 0, computerScore = 0;

        setTimeout(() => {  // Removes added attributes aftet 1 second
            document.querySelector('.info-box').classList.remove('show');
            document.querySelector('body').style.opacity = '1';
            return
        }, 1000);

        return
    }
}

function startGame() {
    playerChoice = this.id;  // Changed from e.target.id ==> this.id because 'this' catches all clicks inside of a div,
                             // but e.target cathes only clicks exactly on that target and not on child clicks.
    computerChoice = getComputerChoice();

    let computerOutput = document.querySelector('.computer-output');
    computerOutput.innerHTML = `<img src="images/${computerChoice}.png"></img>${computerChoice}`;

    console.log('pc:' + playerChoice);
    console.log('cc:' + computerChoice);

    let winner = compareInputs(playerChoice, computerChoice);   // winner specified by function output

    if(winner == 'player') {
        playerScore++;

        document.querySelector('#player-profile .score-container').classList.add('zoomed');  // Adds scale effect on score incremented
        setTimeout(() => {
            document.querySelector('#player-profile .score-container').classList.remove('zoomed'); // Removes after 1 second
        }, 1000);

    } else if(winner == 'computer') {
        computerScore++;

        document.querySelector('#computer-profile .score-container').classList.add('zoomed');
        setTimeout(() => {
            document.querySelector('#computer-profile .score-container').classList.remove('zoomed');
        }, 1000);
    } else {

    }

    checkScore();
}

let playerScore = 0, computerScore = 0;  // Implementation of score variables

const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener('click', startGame));  // Adding listeners on each card