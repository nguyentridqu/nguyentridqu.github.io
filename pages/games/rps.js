
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choice = Math.random()*3;
    if (choice < 1) {
        return "rock";
    } else if (choice < 2) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Pick \"rock\", \"paper\", or \"scissors\".");
}


function playRound(computerChoice, humanChoice) {
    let result = -1;
    if (computerChoice.toLowerCase() === humanChoice.toLowerCase()) {
        result = 0;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors"
        || humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper"
        || humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"
    ){
        result = 1;
    }
    return result;
}

function playGame(numRounds) {
    for (let i = 0; i < numRounds; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        roundResult = playRound(computerChoice, humanChoice);

        let resultString = "";
        switch (roundResult) {
            case -1:
                resultString += "You lose."
                computerScore++;
                break;
            case 1:
                resultString += "You win."
                humanScore++;
                break;
            default:
                resultString += "You draw."
                break;
        }



        resultString += ` Computer's choice: ${computerChoice}. Human's choice: ${humanChoice}.`
        console.log(resultString);
    }
}

playGame(5);
console.log(`Your score: ${humanScore}.`);
console.log(`Computer's score: ${computerScore}.`);