// Get user Input (input is a case insensitive string)
// generate Computer input
// compare the two inputs and decide the winner

let humanChoice;
let computerChoice;
let humanScore = 0;
let computerScore = 0;

function PlayGame (){
    for (i = 1; i <= 5; i++){
        PlayRound()
    }

    if (humanScore > computerScore){
        console.log ("SCORE IS: CPU: " + computerScore + "-" + humanScore + " :YOU")
        console.log ("YOU WIN!")
    } else if (computerScore > humanScore){
        console.log ("SCORE IS: CPU: " + computerScore + "-" + humanScore + " :YOU")
        console.log ("CPU WINS!")
    } else {
        console.log ("SCORE IS: CPU: " + computerScore + "-" + humanScore + " :YOU")
        console.log ("ITS A TIE!")
    }
}

function PlayRound (){
    ComputerLogic();
    HumanPrompt();

    if (computerChoice === humanChoice.toLowerCase()){
        console.log ("CPU: " + computerChoice + " VS " + "YOU: " + humanChoice);
        console.log("TIE");
    }   else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors"){
        console.log ("CPU: " + computerChoice + " VS " + "YOU: " + humanChoice);
        console.log("Player Wins");
        humanScore++;
    }   else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock"){
        console.log ("CPU: " + computerChoice + " VS " + "YOU: " + humanChoice);
        console.log("Player Wins");
        humanScore++;
    }   else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper"){
        console.log ("CPU: " + computerChoice + " VS " + "YOU: " + humanChoice);
        console.log("Player Wins");
        humanScore++;
    } else if (humanChoice.toLowerCase() !== "rock" &&
                humanChoice.toLowerCase() !== "paper" &&
                humanChoice.toLowerCase() !== "scissors"){
        console.log ("INVALID INPUT")
    }else {
        console.log ("CPU: " + computerChoice + " VS " + "YOU: " + humanChoice);
        console.log ("Computer Wins");
        computerScore++;
    }
}

function ComputerLogic(){
    let choice = Math.floor(Math.random() * 3);

    switch (choice){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }

    return null;
}

function HumanPrompt(){
    humanChoice = prompt("Enter your choice: ");

    return null;
}

PlayGame();
