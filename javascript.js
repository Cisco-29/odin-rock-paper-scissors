console.log("Welcome to Rock Paper Scissors!");
let computerChoice;
let playerInput;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let round = 0;

// Start game loop on website load. 
// It will play 5 rounds automatically (not counting ties or mis-inputs), then reset.

for (round = 0; round <= 5; round++){
    if (round <5)
    {
        StartGame();
    }
    else {
        if (playerScore > computerScore){
            console.log("YOU WIN!! Another match?")
        }else{
            console.log("YOU LOSE!! Another match?")
        }
        ResetScores();
        round = 0;
    }   
}

function ResetScores(){
    playerScore = 0;
    computerScore = 0;
}    

function StartGame(){
    GetPlayerInput();
}

// Prompt player to input rock paper or scissors.
// convert their choice to lowercase for processing.
// Continue only if the player chose a valid response, otherwise notify and minus a round.
function GetPlayerInput(){
    playerInput = prompt("Rock, Paper, or Scissors?")
    playerChoice = playerInput.toLowerCase();

    if(playerChoice == "rock" || playerChoice == "paper"|| playerChoice == "scissors"){
        console.log(`You chose ${playerChoice}!`)
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
            console.log("Computer chose Rock!");
            computerChoice = randomNumber;
            RunWinLogic();
            break;
        case randomNumber == 4:
        case randomNumber == 5:
        case randomNumber == 6:
            console.log("Computer chose Paper!");
            computerChoice = randomNumber;
            RunWinLogic();
            break;     
        case randomNumber == 7:
        case randomNumber == 8:
        case randomNumber == 9:
            console.log("Computer chose Scissors!");
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
            console.log("It's a tie!")
            SubtractFromRounds()
        }        
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 6){
            console.log("Suck it!")
            UpdateScoreTracker("ai");
        }
        if (computerChoice == 7 || computerChoice == 8 || computerChoice == 9){
            console.log("You win! Good game!")
            UpdateScoreTracker("player");
        }    
    }else if (playerChoice == "paper"){
        if (computerChoice == 1 || computerChoice == 2 || computerChoice == 3){
            console.log("You win! Good game!")
            UpdateScoreTracker("player");
        }        
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 6){
            console.log("It's a tie!")
            SubtractFromRounds()
        }
        if (computerChoice == 7 || computerChoice == 8 || computerChoice == 9){
            console.log("Suck it!")
            UpdateScoreTracker("ai");
        }    
    }else if (playerChoice == "scissors"){
        if (computerChoice == 1 || computerChoice == 2 || computerChoice == 3){
            console.log("Suck it!")
            UpdateScoreTracker("ai");
        }        
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 6){
            console.log("You win! Good game!")
            UpdateScoreTracker("player");
        }
        if (computerChoice == 7 || computerChoice == 8 || computerChoice == 9){
            console.log("It's a tie!")
            SubtractFromRounds()
        }    
    }
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
