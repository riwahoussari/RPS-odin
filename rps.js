// variables
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let tiedScore = false;
// UI variables 
const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const buttons = document.querySelectorAll("button")
const resultDiv = document.querySelector('#resultDiv')
const scoreDiv = document.querySelector("#scoreDiv")
const winnerDiv = document.querySelector("#winnerDiv")


// make a function to getComputerChoice
function getComputerChoice(){
    let ranNum = Math.floor(Math.random()*3)
    let choices = ["rock", "paper", "scissors"]
    computerChoice = choices[ranNum]
}

// add listeners to getPlayerChoice
rockBtn.addEventListener("click", () => {
    playerChoice = "rock"
})
paperBtn.addEventListener("click", () => {
    playerChoice = "paper"
})
scissorsBtn.addEventListener("click", () => {
    playerChoice = "scissors"
})

// make a function that returns the result of the round
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        resultDiv.textContent = `You tied! ${playerChoice} ties ${computerChoice}`
        return "tie"
    }else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")){
        resultDiv.textContent = `You won! ${playerChoice} beats ${computerChoice}`
        return "win"

    }else{
        resultDiv.textContent = `You lost! ${computerChoice} beats ${playerChoice}`
        return "loss"
    }
}

// make a function to track the score and show it and calls showResult
function trackScore(result){
    if (result==="win"){
        playerScore ++
    }else if(result==="loss"){
        computerScore ++
    }
    scoreDiv.textContent = `your score: ${playerScore} `
    scoreDiv.textContent += `|| computer's score: ${computerScore}`
}

///////////////////////////////////////////

buttons.forEach((button) => {
    button.addEventListener('click' , ()=>{
        game()
    })
})

function game(){
    winnerDiv.textContent = ""
    getComputerChoice()
    trackScore(playRound(playerChoice, computerChoice))
    if(playerScore == 3){
        winnerDiv.textContent = "you won the game"
        playerScore = 0
        computerScore = 0
    }else if(computerScore == 3){
        winnerDiv.textContent = "computer won the game"
        playerScore = 0
        computerScore = 0
    }
    
 }


