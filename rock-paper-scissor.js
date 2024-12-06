
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(i) {
    i = Math.random(1);
    console.log(i);
    if (i < 1/3)  {
        return computerChoice = "rock"
    }
    if (i < 2/3 )  {
        return computerChoice = "paper"
    }
    else  {
        return computerChoice = "scissor";
    };
}
function getHumanChoice(){
    humanChoice = prompt("Your choice");
    humanChoice.toLowerCase(); 
    return humanChoice;   
}

function playRound(humanChoice, computerChoice){
    
    
        if (humanChoice == "rock" && computerChoice == "scissor") {
            humanScore = humanScore + 1;
            console.log("Choix ordi" + " " + computerChoice + "Choix humain" + " " +humanChoice)
            console.log("Computer : " + computerScore + " | " + "Human : " + humanScore)
            return console.log(humanScore) + console.log("Rock beat scissor") ;
        }
        if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore = humanScore + 1 ;
            console.log("Choix ordi" + " " + computerChoice +" "+  "Choix humain" + " " +humanChoice)
            console.log("Computer : " + computerScore + " | " + "Human : " + humanScore)
            return console.log(humanScore) + console.log("Paper beat rock") ;
        } 
        if (humanChoice == "scissor" && computerChoice == "paper") {
            humanScore = humanScore + 1;
            console.log("Choix ordi" + " " + computerChoice +" "+  "Choix humain" + " " +humanChoice)
            console.log("Computer : " + computerScore + " | " + "Human : " + humanScore)
            return console.log(humanScore) + console.log("scissor beat paper") ;
            
        }
        if (humanChoice === computerChoice) {
            console.log("Choix ordi" + " " + computerChoice +" "+  "Choix humain" + " " +humanChoice)
            console.log("Computer : " + computerScore + " | " + "Human : " + humanScore)
            return console.log(humanScore) + console.log("That's a draw") ;
            
        }
        else {
            computerScore = computerScore + 1;
            console.log('computer wins')
            console.log("Choix ordi" + " " + computerChoice + " "+ "Choix humain" + " " +humanChoice)
            console.log("Computer : " + computerScore + " | " + "Human : " + humanScore)
        }      
    
};

const humanSelection= getHumanChoice();
const computerSelection = getComputerChoice(); 

for (let i = 0; i < 5; i++) {
  
    
    playRound(humanSelection, computerSelection); 
}
