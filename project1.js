let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#YOU");
const compScorePara = document.querySelector("#SYSTEM");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * options.length);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "It's a draw! Play again.";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}.`;
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin;

    switch (userChoice) {
      case "rock":
        userWin = compChoice === "scissors";
        break;
      case "paper":
        userWin = compChoice === "rock";
        break;
      case "scissors":
        userWin = compChoice === "paper";
        break;
      default:
        msg.innerText = "Invalid choice! Try again.";
        return;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

// Event listeners for user choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id").toLowerCase();
    playGame(userChoice);
  });
});