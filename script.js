const a = 'rock',b = 'paper',c= 'scissors';
const buttons = document.querySelectorAll('.play_button');
const round = document.getElementById('round');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const winner = document.getElementById('winner');
const reset = document.getElementById('reset');
let compScore = 0;
let playScore = 0;

round.textContent = "(click a button to start)";
player.textContent = playScore;
computer.textContent = compScore;
winner.textContent = "(first to 5 wins)";

function computerPlay(){
    const options = [a,b,c]
    let i = Math.floor(Math.random() * 3);
    return options[i];
}

function playRound(playerSelection, computerSelection){
    if (playScore === 5 || compScore === 5) {
        return;
    } else {
        if (playerSelection === computerSelection){
            round.textContent = 'Draw';
        } else if (playerSelection === a && computerSelection === b) {
            round.textContent = `You lose, ${b} covers ${a}.`;
            compScore = ++compScore;
        } else if (playerSelection === a && computerSelection === c) {
            round.textContent = `You win, ${a} crushes ${c}!`;
            playScore = ++playScore;
        } else if (playerSelection === b && computerSelection === c) {
            round.textContent = `You lose, ${c} cut ${b}.`;
            compScore = ++compScore;
        } else if (playerSelection === b && computerSelection === a) {
            round.textContent = `You win, ${b} covers ${a}!`;
            playScore = ++playScore;
        } else if (playerSelection === c && computerSelection === a) {
            round.textContent = `You lose, ${a} crushes ${c}.`;
            compScore = ++compScore;
        } else if (playerSelection === c && computerSelection === b) {
            round.textContent = `You win, ${c} cut ${b}!`;
            playScore = ++playScore;
        } else {
            round.textContent = "Something has gone awry...";
        };
        player.textContent = playScore;
        computer.textContent = compScore;
    };
    if (playScore ===5) {
        winner.textContent = "You win!!!";
    } else if (compScore === 5) {
        winner.textContent = "You lose!!!";
    };
};

function game() {
    let playerSelection = this.id;
    const computerSelection = computerPlay();
    playRound(playerSelection,computerSelection);
};

function resetGame() {
    compScore = 0;
    playScore = 0;
    round.textContent = "(click a button to start)";
    winner.textContent = "(first to 5 wins)";
}

buttons.forEach(button => button.addEventListener('click', game));

reset.addEventListener('click',resetGame);
