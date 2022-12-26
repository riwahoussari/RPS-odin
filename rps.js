// declare a variable to store the computer's choice
let computerChoice;
// make a function to getComputerChoice
function getComputerChoice(){
    let ranNum = Math.floor(Math.random()*3)
    let choices = ["rock", "paper", "scissors"]
    computerChoice = choices[ranNum]
}


// declare a variable to store the player's choice 
let playerChoice;
// make a function getPlayerChoice
function getPlayerChoice(){
    playerChoice = (prompt("rock, paper or scissors?")).toLowerCase()
    switch(playerChoice){
        case "rock":
            break;
        case "paper":
            break;
        case "scissors":
            break;
        default:
            getPlayerChoice();
    }
}


// make a function that returns the result of the round
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "tie"
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")){
        return "win"
    }
    else{
        return "loss"
    }
}


// display message of who won the round
function showResult(result){
    if (result==="tie"){
        console.log(`You tied! ${playerChoice} ties ${computerChoice}`)
    }else if (result==="win"){
        console.log(`You won! ${playerChoice} beats ${computerChoice}`)
    }else{
        console.log(`You lost! ${computerChoice} beats ${playerChoice}`)
    }
    
}


// declare variables to store the score
let playerScore = 0;
let computerScore = 0;
// make a function to track the score and show it and calls showResult
function trackScore(result){
    showResult(result)
    if (result==="win"){
        playerScore ++
    }else if(result==="loss"){
        computerScore ++
    }
    console.log(playerScore)
    console.log(computerScore)
}


//declare a variable for a tiebreaker
let tiedScore = false;
//make a tie breaker function
function tieBreaker(){
    let i = 0;
    while (1 == 1){
        i++;
        console.log("tie breaker:" + i)
        getComputerChoice()
        getPlayerChoice()
        let result = playRound(playerChoice, computerChoice);
        if (result === "win"){
            trackScore(result)
            console.log("CONGRATULATION YOU WON THE GAME!")
            break;
        }else if (result === "loss"){
            trackScore(result)
            console.log("UNFORTUNATELY, YOU LOST THE GAME!")
            break;
        }
        console.log("still tied!")
        
    }
}


//  make a function that asks for a new game
function getNewGame(){
    return confirm("want to start a new game?")
}


// make a function game that -calls 3 rounds- and -displays the final score- and -calls tiebreakers- 
function game(){
    // call the funcions 3 times
    for (let i = 1; i<4 ; i++){
        console.log(`round: ${i}`)
        getComputerChoice()
        getPlayerChoice()
        trackScore(playRound(playerChoice, computerChoice))
    }
    // display final score
    if (playerScore>computerScore){
        console.log("CONGRATULATION, YOU WON THE GAME!")
    }else if (playerScore<computerScore){
        console.log("UNFORTUNATELY, YOU LOST THE GAME!")
    }else{
        console.log("GAME IS TIED")
        tiedScore = true;
    } 
    // call tie breaker
    if (tiedScore === true){
        tieBreaker()
    }   
    // ask and call new game
    let newGame = getNewGame();
    if (newGame === true){
        playerScore = 0;
        computerScore = 0;
        game()
    }else{
        console.log("GOODBYE :)")
    }
}
game()
