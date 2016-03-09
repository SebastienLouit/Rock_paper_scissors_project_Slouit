 'use strict';
 
 function getInput() {
     console.log("Please choose either 'rock', 'paper', or 'scissors'.");
     return prompt();
 }
 function randomPlay() {
     var randomNumber = Math.random();
     if (randomNumber < 0.33) {
         return "rock";
     } else if (randomNumber < 0.66) {
         return "paper";
     } else {
         return "scissors";
     } 


 function getPlayerMove(move) {

   if (move === "" || move === null || move === undefined) {
        move = getInput();
    } else {
        move = move;
    }
    return ("You choose " + move);
}
      
  
  
  function getComputerMove(move) {

    if (move === '' || move === null || move === undefined) 
    {
        move = randomPlay();
    } 
    else 
    {
        move = move;
    }
   return ("The computer picked" + move);
}
     
  }
  
  function getWinner(playerMove,computerMove) {
 
    var winner;
    if(playerMove === computerMove) {
        winner = "tie";
    }
    
    else if (playerMove === "paper" && computerMove === "rock"){
    winner = "player";
    }
     else if (playerMove === "paper" && computerMove === "scissors"){
    winner = "computer";
    }
    
    else if (playerMove === "rock" && computerMove === "scissors"){
    winner = "player";
    }
     else if (playerMove === "rock" && computerMove === "paper"){
    winner = "computer";
    }
    
     else if (playerMove === "scissors" && computerMove === "paper"){
    winner = "player";
    }
     else if (playerMove === "scissors" && computerMove === "rock"){
    winner = "computer";
    }
    else
    {
        winner = null;
    }
return winner ;
}
  
  function playToFive(game) {
 +    console.log("Let's play Rock, Paper, Scissors");
      var playerWins = 0;
      var computerWins = 0;
      
      while (playerWins<6 && computerWins<6){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        
        if (winner === "player"){
return playerWins += 1
 console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
 console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
}
 else if (winner === "computer") {
computerWins += 1
 console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
 console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
 }
 else{
  console.log ("it's a tie, no one scores. Current score is still" + playerWins +"to"+computerWins);
        }
      }

      return [playerWins, computerWins];
  }