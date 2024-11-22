// Get user Input (input is a case insensitive string)
// generate Computer input
// compare the two inputs and decide the winner

let winnerDecided = false;
let roundNumber = 0;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

const div = document.querySelector("#results")
    div.style.border = "3px solid black";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "grey";
    div.style.width = "300px";
    div.style.height = "400px";


const buttons = document.querySelectorAll("button")

const resultsHeader = document.createElement ("h3");
resultsHeader.setAttribute("class", "text");
resultsHeader.textContent = "Results: ";
div.appendChild(resultsHeader);

const displayRounds = document.createElement ("p");
displayRounds.setAttribute("class", "text roundCard");
displayRounds.textContent = "ROUND: " + roundNumber;
div.appendChild(displayRounds);

const humanChoiceDisplay = document.createElement("p");
humanChoiceDisplay.setAttribute("class", "text");
humanChoiceDisplay.textContent = "YOU: "
div.appendChild(humanChoiceDisplay);

const cpuChoiceDisplay = document.createElement("p");
cpuChoiceDisplay.setAttribute("class", "text");
cpuChoiceDisplay.textContent = "CPU: "
div.appendChild(cpuChoiceDisplay);

const scorecardHeader = document.createElement("h3");
scorecardHeader.setAttribute("class", "text");
scorecardHeader.textContent = "SCORES: ";
div.appendChild(scorecardHeader);

const scores = document.createElement("p");
scores.setAttribute("class", "text");
scores.style.marginBottom = "5px";
scores.style.textAlign = "center";
scores.textContent = "CPU: " + computerScore + " - " + humanScore + " :YOU";
div.appendChild(scores);

buttons.forEach((button)  => {
    button.addEventListener("click", () => {
        
        let choice = button.textContent;

        if (winnerDecided === true){
            roundNumber = 0;
            humanScore = 0;
            computerScore = 0;
            resultsHeader.textContent = "Results: ";
            winnerDecided = false;
        }

        PlayRound(choice);
        humanChoiceDisplay.textContent = "YOU: " + choice;
        cpuChoiceDisplay.textContent = "CPU: " + computerChoice;
        displayRounds.textContent = "ROUND: " + roundNumber;

    })
})

function PlayRound (humanChoice){
    ComputerLogic();

    if (computerChoice === humanChoice){
    }   else if (humanChoice === "Rock" && computerChoice === "Scissors"){
        humanScore++;
    }   else if (humanChoice === "Paper" && computerChoice === "Rock"){
        humanScore++;
    }   else if (humanChoice === "Scissors" && computerChoice === "Paper"){
        humanScore++;
    } else {
        computerScore++;
    }

    scores.textContent = "CPU: " + computerScore + " - " + humanScore + " :YOU";

    roundNumber++;

    if (computerScore === 5 || humanScore === 5){
        winnerDecided = true;
        if (computerScore === 5){
            resultsHeader.textContent = "Results: CPU WINS!";
        } else {
            resultsHeader.textContent = "Results: YOU WIN";
        }
    }
}

function ComputerLogic(){
    let choice = Math.floor(Math.random() * 3);

    switch (choice){
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }

    return null;
}
