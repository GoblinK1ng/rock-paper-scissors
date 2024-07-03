let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        console.log(button.id);
        playRound(button.id,getComputerChoice());
    });
});

function getComputerChoice(){
    let choice = Math.random();
    if (choice < 1/3) return "rock";
    else if (choice > 2/3) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Enter either Rock, Paper or Scissors");
    if (choice.toLowerCase() === "rock") return "rock";
    else if (choice.toLowerCase() === "paper") return "paper";
    else if (choice.toLowerCase()  === "scissors") return "Scissors";
    else return "INVALID";
}

function playRound(humanChoice, computerChoice){
    if ((humanChoice === "rock" && computerChoice === "paper") || 
    (humanChoice === "paper" && computerChoice === "scissors") || 
    (humanChoice === "scissors" && computerChoice === "rock")){
        console.log("You Lose!",computerChoice,"beats",humanChoice);
        computerScore++;
    }
    else if ((humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "sicssors" && computerChoice === "paper") || 
    (humanChoice === "rock" && computerChoice === "scissors")){
        console.log("You Win!",humanChoice,"beats",computerChoice);
        humanScore++;
    }
    else console.log("Its a Tie");
}

function playGame(amount){
    for (let i = 0; i <amount;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log(humanScore,computerScore);
}
