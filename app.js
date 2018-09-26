// require prompt-sync node library to get info from the user synchronously
const prompt = require('prompt-sync')();
// create a board as an array to hold choices
let board = [0,1,2,3,4,5,6,7,8];
// create a variable to keep track of board spots seleced to check for ties (used in determineTie function)
let spotsSelected = 0;
// player 1 is "X"
let player1 = "X";
// player 2 is "O"
let player2 = "O";

// function to print the board as a tic-tac-toe board
const printBoard = (board) => {
  console.log(board[0] + " | " + board[1] + " | " + board[2]);
  console.log(board[3] + " | " + board[4] + " | " + board[5]);
  console.log(board[6] + " | " + board[7] + " | " + board[8]);
};
// function to get oard selection from user
const getUserChoice = (player) => {
  let userChoice = prompt(`Please select a choice: ${player} `)
  return userChoice;
};
// function that determines if a bord has already been selected
const alreadySelected = (board, choice) => {
  if (board[choice] == "X" || board[choice] == "O") {
    return true;
  } else {
    return false;
  }
};
// function that updates the board to show the players choice
const updateBoard = (board, choice, value) => {
  board[choice] = value;
  spotsSelected ++;
};
// function that determines if a player has won; looking ofr horizontal, vertical, and diagonal scenarios
const determineWin = (board) => {
  if ((board[0] == board[1] && board[1] == board[2]) ||
      (board[3] == board[4] && board[4] == board[5]) ||
      (board[6] == board[7] && board[7] == board[8]) ||
      (board[0] == board[3] && board[3] == board[6]) ||
      (board[1] == board[4] && board[4] == board[7]) ||
      (board[2] == board[5] && board[5] == board[8]) ||
      (board[0] == board[4] && board[4] == board[8]) ||
      (board[2] == board[4] && board[4] == board[6])) {
        return true;
  } else {
    return false;
  }
};
// function that determines if the game is a tie
const determineTie = (board) => {
  if (spotsSelected == 9) {
    return true;
  } else {
    return false;
  }
};
// main game engine that runs on a while loop and breaks if either player wins or if the game is tied
// there are two while loops within the main while loop to make sure the user selects choices until a choice has been made that was not already selected 
while (true) {
  printBoard(board);
  while (true) {
    let choice = getUserChoice("Player 1");
    if (!alreadySelected(board, choice)) {
      updateBoard(board, choice, player1);
      break;
    };
  };
  if (determineWin(board)) {
    console.log("Player 1 wins!");
    break;
  };
  if (determineTie(board)) {
    console.log("It is a tie");
    break;
  };
  printBoard(board);
  while (true) {
    let choice = getUserChoice("Player 2");
    if (!alreadySelected(board, choice)) {
      updateBoard(board, choice, player2);
      break;
    };
  };
  if (determineWin(board)) {
    console.log("Player 2 wins!");
    break;
  };
  if (determineTie(board)) {
    console.log("It is a tie");
    break;
  };
};
