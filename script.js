let a = 'rock',b = 'paper',c= 'scissors';
// let comp = 0;
// let player = 0;

function computerPlay(){
    const options = [a,b,c]
    let i = Math.floor(Math.random() * 3);
    return options[i];
}

// function playRound(){
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log("Draw");
    } else if (playerSelection === a && computerSelection === b) {
        console.log(`You lose, ${b} covers ${a}.`)
    } else if (playerSelection === a && computerSelection === c) {
        console.log(`You win, ${a} crushes ${c}!`)
    } else if (playerSelection === b && computerSelection === c) {
        console.log(`You lose, ${c} cut ${b}.`)
    } else if (playerSelection === b && computerSelection === a) {
        console.log(`You win, ${b} covers ${a}!`)
    } else if (playerSelection === c && computerSelection === a) {
        console.log(`You lose, ${a} crushes ${c}.`)
    } else if (playerSelection === c && computerSelection === b) {
        console.log(`You win, ${c} cut ${b}!`)
    } else {
        console.log("Something has gone awry...");
    }
}


// After changing to passing parameters
// var playerSelection = a;
// console.log(playRound(playerSelection, computerSelection));
// playerSelection = b;
// console.log(playRound(playerSelection, computerSelection));
// playerSelection = c;
// console.log(playRound(playerSelection, computerSelection));

// How I did it with global variables
// player = a;
// console.log(`Player plays ${player}`);
// computerPlay();
// console.log(`Computer plays ${comp}`);
// compare();
// player = b;
// console.log(`Player plays ${player}`);
// computerPlay();
// console.log(`Computer plays ${comp}`);
// compare();
// player = c;
// console.log(`Player plays ${player}`);
// computerPlay();
// console.log(`Computer plays ${comp}`);
// compare();

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter either rock, paper, or scissors");
        const computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
    };
}
game();