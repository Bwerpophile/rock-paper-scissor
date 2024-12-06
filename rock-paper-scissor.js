

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(i) {
    i = Math.random();
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
    let humanChoice = prompt("Your choice");
    humanChoice = humanChoice.toLowerCase(); 
    return humanChoice; 
}

function playRound(humanChoice, computerChoice){
    
    
        if (humanChoice == "rock" && computerChoice == "scissor") {
            humanScore = humanScore + 1;
            console.log("Choix ordi" + " " + computerChoice + " " +"Choix humain" + " " +humanChoice)
            console.log("Computer : " + computerScore + " | " + "Human : " + humanScore)
            return console.log("Rock beat scissor") ;
        }
        if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore = humanScore + 1 ;
            console.log("Choix ordi" + " " + computerChoice +" "+  "Choix humain" + " " +humanChoice)
            console.log("Computer : " + computerScore + " | " + "Human : " + humanScore)
            return console.log("Paper beat rock") ;
        } 
        if (humanChoice == "scissor" && computerChoice == "paper") {
            humanScore = humanScore + 1;
            console.log("Choix ordi" + " " + computerChoice +" "+  "Choix humain" + " " +humanChoice)
            console.log("Computer : " + computerScore + " | " + "Human : " + humanScore)
            return console.log("scissor beat paper") ;
            
        }
        if (humanChoice === computerChoice) {
            console.log("Choix ordi" + " " + computerChoice +" "+  "Choix humain" + " " +humanChoice)
            console.log("Computer : " + computerScore + " | " + "Human : " + humanScore)
            return console.log("That's a draw") ;
            
        }
        else {
            computerScore = computerScore + 1;
            console.log("Choix ordi" + " " + computerChoice + " "+ "Choix humain" + " " +humanChoice)
            console.log("Computer : " + computerScore + " | " + "Human : " + humanScore)
            console.log('computer wins')
        }      
    
};

function playGame(roundNum){
    
    for (let round = 0; round < roundNum; round++) {
        const humanSelection= getHumanChoice();
        const computerSelection = getComputerChoice(); 
        playRound(humanSelection, computerSelection); 
        console.log(`'Vous êtes au ${round}`)
    }; 
}

playGame(5);
