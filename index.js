
const choices = ["Lapis", "Papryus", "Scalpellus"];
let playerChoice = {
  choice: "#",
};
let computerChoice = {
  choice: "#",
};

document.querySelector('#button').addEventListener('click', compareChoices)


function computerChooses() {
  let random = Math.floor(Math.random() * choices.length);
  computerChoice.firstpick = choices[random];
}

playerChoice.firstpick = choices[1];

function compareChoices() {
  computerChooses();
  if (computerChoice.firstpick === choices[0]) {
    if (playerChoice.firstpick === choices[1]) {
      displayResult(
        "The computer wins! the computer chose " +
          computerChoice.firstpick +
          " and the player chose " +
          playerChoice.firstpick
      );
    }
    return 1;
  } else if (playerChoice.firstpick === choices[2]) {
    if (computerChoice.firstpick === choices[1]) {
      displayResult(
        "The player wins! the player chose " +
          playerChoice.firstpick +
          " and the computer chose " +
          computerChoice.firstpick
      );
    }
    return 1;
  } else if (playerChoice.firstpick === choices[0]) {
    if (computerChoice.firstpick === choices[0]) {
      displayResult(
        "The computer wins! the computer chose " +
          computerChoice.firstpick +
          " and the player chose " +
          playerChoice.firstpick
      );
    }
  } else playerChoice.firstpick === computerChoice.firstpick;
  {
    displayResult("It is a tie!");
  }
}

function displayResult(result) {
  const resultText = document.createElement("p");
  resultText.innerText = result;
  document.body.appendChild(resultText);
  
}
