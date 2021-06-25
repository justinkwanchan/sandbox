const generateBoard = (whiteQueen, blackQueen) => {
  const board = [];
  for (let i = 0; i < 8; i++) {
    board[i] = [];

    for (let j = 0; j < 8; j++) {
      if (whiteQueen[0] === i && whiteQueen[1] === j) {
        board[i][j] = 1;
      } else if (blackQueen[0] === i && blackQueen[1] === j) {
        board[i][j] = 1;
      } else {
        board[i][j] = 0;
      }
    }
  }
  return board;
};

const queenThreat = board => {
  // Find position of pieces
  let piece1 = [];
  let piece2 = [];

  for (const row in board) {
    for (const column in board[row]) {
      if (board[row][column] === 1) {
        if (piece1.length === 0) {
          piece1 = [row, column];
        } else {
          piece2 = [row, column];
        }
      }
    }
  }

  // Check row

  if (piece1[0] === piece2[0]) {
    return true;
  }

  if (piece1[1] === piece2[1]) {
    return true;
  }

  if (Math.abs(piece1[0] - piece2[0]) === Math.abs(piece1[1] - piece2[1])) {
    return true;
  }

  return false;
};

module.exports = { generateBoard, queenThreat };

/* Sample input code */

let whiteQueen1 = [0, 5];
let blackQueen1 = [5, 0];
let generatedBoard1 = generateBoard(whiteQueen1, blackQueen1);
console.log(generatedBoard1);
console.log(queenThreat(generatedBoard1));

let whiteQueen2 = [0, 0];
let blackQueen2 = [5, 7];
let generatedBoard2 = generateBoard(whiteQueen2, blackQueen2);
console.log(generatedBoard2);
console.log(queenThreat(generatedBoard2));
