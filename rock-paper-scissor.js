

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

// function getHumanChoice(){
//     let humanChoice = prompt("Your choice");
//     humanChoice = humanChoice.toLowerCase(); 
//     return humanChoice; 
// }

const container = document.createElement('div');
const result = document.createElement('p');
const result2 = document.createElement('p');
const result3 = document.createElement('p');
const body = document.querySelector('body');


const scissorBtn = document.createElement('button');
scissorBtn.textContent = 'Scissor';
scissorBtn.addEventListener('click', () =>  {
      const humanPaper = "scissor"; 
      const computerChoice = getComputerChoice();
      playRound(humanPaper, computerChoice);       
});


const papperBtn = document.createElement('button');
papperBtn.textContent = 'Papper';
papperBtn.addEventListener('click', () =>  {
    const humanPaper = "paper"; 
    const computerChoice = getComputerChoice();
    playRound(humanPaper, computerChoice);       
});

const rockBtn = document.createElement('button');
rockBtn.textContent = 'Rock';
rockBtn.addEventListener('click', () =>  {
    const humanPaper = "rock"; 
    const computerChoice = getComputerChoice();
    playRound(humanPaper, computerChoice);

});


container.appendChild(scissorBtn);
container.appendChild(papperBtn);
container.appendChild(rockBtn);
container.appendChild(result);
container.appendChild(result2);
container.appendChild(result3);
body.appendChild(container);

function playRound(humanChoice, computerChoice){
    
    
        if (humanChoice == "rock" && computerChoice == "scissor") {
            humanScore = humanScore + 1;
            result.innerText = ("Choix ordi" + " " + computerChoice + " " +"Choix humain" + " " +humanChoice)
            result2.innerText = ("Computer : " + computerScore + " | " + "Human : " + humanScore)
            return result3.innerText = ("Rock beat scissor") ;
        }
        if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore = humanScore + 1 ;
            result.innerText =("Choix ordi" + " " + computerChoice +" "+  "Choix humain" + " " +humanChoice)
            result2.innerText = ("Computer : " + computerScore + " | " + "Human : " + humanScore)
            return result3.innerText = ("Paper beat rock") ;
        } 
        if (humanChoice == "scissor" && computerChoice == "paper") {
            humanScore = humanScore + 1;
            result.innerText =("Choix ordi" + " " + computerChoice +" "+  "Choix humain" + " " +humanChoice)
            result2.innerText =("Computer : " + computerScore + " | " + "Human : " + humanScore)
            return result3.innerText = ("scissor beat paper") ;
            
        }
        if (humanChoice === computerChoice) {
            result.innerText =("Choix ordi" + " " + computerChoice +" "+  "Choix humain" + " " +humanChoice)
            result2.innerText = ("Computer : " + computerScore + " | " + "Human : " + humanScore)
            return result3.innerText = ("That's a draw") ;
            
        }
        else {
            computerScore = computerScore + 1;
            result.innerText = ("Choix ordi" + " " + computerChoice + " "+ "Choix humain" + " " +humanChoice)
            result2.innerText = ("Computer : " + computerScore + " | " + "Human : " + humanScore)
           result3.innerText = ('computer wins')
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
