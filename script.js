function getComputerChoice() {
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

function startGame(e) {
    // e.stopPropagation()

    playerChoice = this.id;  // changed from e.target.id ==> this.id because 'this' cathes all clicks inside of a div,
                             // but e.target cathes only clicks exactly on that target and not on child clicks.
    computerChoice = getComputerChoice();

    let computerOutput = document.querySelector('.computer-output');
    computerOutput.innerHTML = `<img src="images/${computerChoice}.png"></img>${computerChoice}`;

    console.log('pc:' + playerChoice);
    console.log('cc:' + computerChoice);

    let winner = compareInputs(playerChoice, computerChoice);

    setTimeout(() => {
        if(winner == 'player') {
            alert('You have won!');
        } else if(winner == 'computer') {
            alert('You lose! :C');
        } else {
            alert(`It's a tie, try again.`);
        }
    }, 500);

}

const cards = document.querySelectorAll('.card');

cards.forEach(card => card.addEventListener('click', startGame, {
    // capture: false
})); 


