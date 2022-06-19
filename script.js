let a = 'rock',b = 'paper',c= 'scissors';
let comp = 0;
let player = 0;

function computerPlay(){
    const options = [a,b,c]
    let i = Math.floor(Math.random() * 3);
    comp = options[i];
}

function compare(){
    if (player === comp){
        console.log("Draw");
    } else if (player === a && comp === b) {
        console.log("Computer wins!")
    } else if (player === a && comp === c) {
        console.log("Player wins!")
    } else if (player === b && comp === c) {
        console.log("Copmuter wins!")
    } else if (player === b && comp === a) {
        console.log("Player wins!")
    } else if (player === c && comp === a) {
        console.log("Computer wins!")
    } else if (player === c && comp === b) {
        console.log("Player wins!")
    } else {
        console.log("Something has gone awry...");
    }
}

player = a;
console.log(`Player plays ${player}`);
computerPlay();
console.log(`Computer plays ${comp}`);
compare();
player = b;
console.log(`Player plays ${player}`);
computerPlay();
console.log(`Computer plays ${comp}`);
compare();
player = c;
console.log(`Player plays ${player}`);
computerPlay();
console.log(`Computer plays ${comp}`);
compare();