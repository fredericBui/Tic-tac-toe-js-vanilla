const prompt = require("prompt-sync")();

// Variables du jeu
players = {};
board = {
  line1: ["-", "-", "-"],
  line2: ["-", "-", "-"],
  line3: ["-", "-", "-"],
};

// Démarrage du jeu
function gameInitialisation(players) {
  console.log("Hello, player one.");
  players.one = prompt("What's your name ? ");
  console.log(`P1 (x) : ${players.one} - Ready !\n`);

  console.log("Hey there, player two.");
  players.two = prompt("What's your name ? ");
  console.log(`P2 (o): ${players.two} - Ready !\n`);

  console.log(
    "The board is divide in 3 lines and 3 columns. Consider that each square as a number. Squares number are beetween 1 and 9.\n"
  );
  console.log("The board :");
  console.log("|1|2|3|");
  console.log("|4|5|6|");
  console.log("|7|8|9|\n");
}

// Remplissage du tableau
function filBoard(choice, symbol) {
  switch (choice) {
    case "1":
      board["line1"][0] = symbol;
      break;
    case "2":
      board["line1"][1] = symbol;
      break;
    case "3":
      board["line1"][2] = symbol;
      break;
    case "4":
      board["line2"][0] = symbol;
      break;
    case "5":
      board["line2"][1] = symbol;
      break;
    case "6":
      board["line2"][2] = symbol;
      break;
    case "7":
      board["line3"][0] = symbol;
      break;
    case "8":
      board["line3"][1] = symbol;
      break;
    case "9":
      board["line3"][2] = symbol;
      break;
    default:
      console.log(`Error`);
  }
  console.log(board);
}

// Choix utilisateur
function lastChoice() {
  playerChoice(players.one);
}

function playerChoice(player) {
  var player;
  var symbol;
  player == players.one ? (symbol = "x") : (symbol = "o");
  console.log(`Player : ${player} (${symbol})`);
  var choice = prompt("Choose a square (number beetween 1 and 9) ? ");
  filBoard(choice, symbol);
}

// Affiche le nom du joueur
function showWinner(symbol) {
  switch (symbol) {
    case "x":
      console.log(`${players.one} win : `);
      break;
    case "o":
      console.log(`${players.two} win : `);
      break;
  }
}

// Victoires verticales
function VerticalValidator(verticaleLigneNumber, symbol) {
  return (
    board["line1"][verticaleLigneNumber] == symbol &&
    board["line2"][verticaleLigneNumber] == symbol &&
    board["line3"][verticaleLigneNumber] == symbol
  );
}

function VerticalVictory(symbol) {
  if (VerticalValidator(0, symbol)) {
    showWinner(symbol);
    console.log(`Victoire verticale`);
  } else if (VerticalValidator(1, symbol)) {
    showWinner(symbol);
    console.log(`Victoire verticale`);
  } else if (VerticalValidator(2, symbol)) {
    showWinner(symbol);
    console.log(`Victoire verticale`);
  }
}

// Victoires horizontales
function HorizontalValidator(horizontalLigneNumber, symbol) {
  return (
    board[horizontalLigneNumber][0] == symbol &&
    board[horizontalLigneNumber][1] == symbol &&
    board[horizontalLigneNumber][2] == symbol
  );
}

function HorizontalVictory(symbol) {
  if (HorizontalValidator("line1", symbol)) {
    showWinner(symbol);
    console.log(`Victoire horizontale`);
  } else if (HorizontalValidator("line2", symbol)) {
    showWinner(symbol);
    console.log(`Victoire horizontale`);
  } else if (HorizontalValidator("line3", symbol)) {
    showWinner(symbol);
    console.log(`Victoire horizontale`);
  }
}

// Victoires diagonales

function DiagonalVictory(symbol) {
  if (
    board["line1"][0] == symbol &&
    board["line2"][1] == symbol &&
    board["line3"][2] == symbol
  ) {
    showWinner(symbol);
    console.log("Victoire diagonale descendante droite");
  } else if (
    board["line1"][2] == symbol &&
    board["line2"][1] == symbol &&
    board["line3"][0] == symbol
  ) {
    showWinner(symbol);
    console.log("Victoire diagonale descendante gauche");
  }
}

// Appel des fonctions
gameInitialisation(players);

for (let counter = 0; counter < 4; counter++) {
  playerChoice(players.one);
  playerChoice(players.two);
}
lastChoice();

// Check victory of player 1
VerticalVictory("x");
HorizontalVictory("x");
DiagonalVictory("x");

// Check victory of player 2
VerticalVictory("o");
HorizontalVictory("o");
DiagonalVictory("o");
