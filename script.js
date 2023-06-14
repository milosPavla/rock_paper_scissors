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

function compareInputs(player, computer) {
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
    playerChoice = e.target.id;
    computerChoice = getComputerChoice();

    let computerOutput = document.querySelector('.computer-output');
    computerOutput.innerHTML = `<img src="images/${computerChoice}.png"></img>`;

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

cards.forEach(this.addEventListener('click', startGame));


// const startButton = document.querySelector('.start-button');
// startButton.addEventListener('click', startGame);


game();

