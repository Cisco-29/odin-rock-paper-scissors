console.log("Welcome to Rock Paper Scissors!");
let computerChoice;
let playerInput;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let round = 0;
let toDisplay = [];

// Start game loop on website load. 
// It will play 5 rounds automatically (not counting ties or mis-inputs), then reset.

// for (round = 0; round <= 5; round++){
//     if (round <5)
//     {
//         StartGame();
//     }
//     else {
//         if (playerScore > computerScore){
//             console.log("YOU WIN!! Another match?")
//         }else{
//             console.log("YOU LOSE!! Another match?")
//         }
//         ResetScores();
//         round = 0;
//     }   
// }

//StartGame();

const rockButton = document.querySelector('#rockButton');
rockButton.onclick = () => GetPlayerInput("rock");
const paperButton = document.querySelector('#paperButton');
paperButton.onclick = () => GetPlayerInput("paper");
const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.onclick = () => GetPlayerInput("scissors");

const display = document.getElementById("textDisplay");
const displayContainer = document.getElementById("infobox");
console.log(display + ", " + typeof display);

function updateInfobox(string){
    // remove old child id
    let oldChild = document.getElementById("textDisplay")
    if(oldChild != null){
    displayContainer.removeChild(oldChild);
    }
    // create new child with id, set text.
    const displayInfo = document.createElement("p");
    displayInfo.id = "textDisplay";
    displayInfo.textContent = string.join("\n");
    console.log(displayInfo);
    // display text on viewport
    displayContainer.appendChild(displayInfo);
}

function ResetScores(){
    playerScore = 0;
    computerScore = 0;
}    

function StartGame(){
    GetPlayerInput();
}

// Notes...
// Prompt player to input rock paper or scissors.
// convert their choice to lowercase for processing.
// Continue only if the player chose a valid response, otherwise notify and minus a round.
function GetPlayerInput(clickInput){
    toDisplay.length = 0;
    playerChoice = clickInput;
    if(playerChoice == "rock" || playerChoice == "paper"|| playerChoice == "scissors"){
        //console.log(`You chose ${playerChoice}!`)
        toDisplay.push(`You chose ${playerChoice}!`);
        GetComputerChoice();
    }else 
    {
        console.log("You're doing it wrong.")
        SubtractFromRounds()
    }
}

function GetComputerChoice(){

    // generate random number, 0-9
    // if that number is 0, run again
    // if number is 1-3, rock
    // if number is 4-6, paper
    // if number is 7-9, scissors

    let randomNumber = Math.floor(Math.random() * 10);
    switch (true){
        case randomNumber == 1:
        case randomNumber == 2:
        case randomNumber == 3:
            //console.log("Computer chose Rock!");
            toDisplay.push("Computer chose Rock!");
            computerChoice = randomNumber;
            RunWinLogic();
            break;
        case randomNumber == 4:
        case randomNumber == 5:
        case randomNumber == 6:
            //console.log("Computer chose Paper!");
            toDisplay.push("Computer chose paper!");
            computerChoice = randomNumber;
            RunWinLogic();
            break;     
        case randomNumber == 7:
        case randomNumber == 8:
        case randomNumber == 9:
            //console.log("Computer chose Scissors!");
            toDisplay.push("Computer chose scissors!");
            computerChoice = randomNumber;
            RunWinLogic();
            break;    
        case randomNumber == 0:
            GetComputerChoice();
            break;
        
    }

}

function RunWinLogic(computerSelection){
    // set params
    // if player chose rock
        //if computer chose rock - draw
        //if computer chose paper - player loses
        //if computer chose scissors - player wins
    //else if player chose paper
        //if computer chose rock - player wins
        //if computer chose paper - draw
        //if computer chose scissors - player loses
        //else (player chose scissors)
        //if computer chose rock - player loses
        //if computer chose paper - player wins            
        //if computer chose scissors - draw

    // depending on result, award points, or subtract a round.
        computerSelection = computerChoice;

    if (playerChoice == "rock"){
        if (computerChoice == 1 || computerChoice == 2 || computerChoice == 3){
            //console.log("It's a tie!")
            toDisplay.push("It's a tie!");
            SubtractFromRounds()
        }        
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 6){
            //console.log("Suck it!")
            toDisplay.push("SUCK IT!");

            UpdateScoreTracker("ai");
        }
        if (computerChoice == 7 || computerChoice == 8 || computerChoice == 9){
            //console.log("You win! Good game!")
            toDisplay.push("You win! Good game!");
            UpdateScoreTracker("player");
        }    
    }else if (playerChoice == "paper"){
        if (computerChoice == 1 || computerChoice == 2 || computerChoice == 3){
            //console.log("You win! Good game!")
            toDisplay.push("You win! Good game!");
            UpdateScoreTracker("player");
        }        
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 6){
            //console.log("It's a tie!")
            toDisplay.push("It's a tie!");
            SubtractFromRounds()
        }
        if (computerChoice == 7 || computerChoice == 8 || computerChoice == 9){
            //console.log("Suck it!")
            toDisplay.push("SUCK IT!");
            UpdateScoreTracker("ai");
        }    
    }else if (playerChoice == "scissors"){
        if (computerChoice == 1 || computerChoice == 2 || computerChoice == 3){
            //console.log("Suck it!")
            toDisplay.push("SUCK IT!");
            UpdateScoreTracker("ai");
        }        
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 6){
            //console.log("You win! Good game!")
            toDisplay.push("You win! Good game!");
            UpdateScoreTracker("player");
        }
        if (computerChoice == 7 || computerChoice == 8 || computerChoice == 9){
            //console.log("It's a tie!")
            toDisplay.push("It's a tie!");
            SubtractFromRounds()
        }    
    }

    updateInfobox(toDisplay);
}

// add to the winner's score, display score.
function UpdateScoreTracker(winner){
    if (winner == "player"){
        ++playerScore;
    }else{
        ++computerScore;
    }
    DisplayScore();
}

// subtract a round in case of tie or mis-entry, display score.
function SubtractFromRounds(){
    round -= 1;
    DisplayScore();
}

function DisplayScore(){
    console.log(`Current score: You: ${playerScore} AI: ${computerScore}`);
}
