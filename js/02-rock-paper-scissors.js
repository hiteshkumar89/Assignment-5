function getUserChoice() {
    let userSelected = prompt("Select: Rock, Paper, or Scissors").toLowerCase();
  
    if (userSelected === "rock" || userSelected === "paper" || userSelected === "scissors") {
      return userSelected;
    } else {
      alert("Invalid selection. Please select Rock, Paper, or Scissors.");
      return getUserChoice();
    }
  }
  
  function getComputerChoice() {
    let computerSelected  = Math.floor(Math.random() * 3);
    switch (computerSelected) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  }
  
  function findOutWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It is a tie!";
    }
    if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  
  function playGame() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
  
    alert("You selected: " + userChoice);
    alert("Computer selected: " + computerChoice);
  
    let result = findOutWinner(userChoice, computerChoice);
    alert(result);
  }
  
  playGame();
  