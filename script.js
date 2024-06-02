const board = document.getElementById('board');
const squares = Array.from(document.getElementsByClassName('square'));
const restartButton = document.getElementById('restart');
let currentPlayer = 'X';

squares.forEach((square) => {
  square.addEventListener('click', () => {
    if (square.textContent === '') {
      square.textContent = currentPlayer;
      if (checkWin(currentPlayer)) {
        endGame(currentPlayer);
      } else if (checkDraw()) {
        endGame('draw');
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
});

restartButton.addEventListener('click', restartGame);

function checkWin(player) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningCombos.some((combo) => {
    return combo.every((index) => {
      return squares[index].textContent === player;
    });
  });
}

function checkDraw() {
  return squares.every((square) => {
    return square.textContent !== '';
  });
}

function endGame(winner) {
  if (winner === 'draw') {
    alert('The game is a draw!');
  } else {
    alert(`Player ${winner} wins!`);
  }
  squares.forEach((square) => {
    square.textContent = '';
  });
  currentPlayer = 'X';
}

function restartGame() {
  squares.forEach((square) => {
    square.textContent = '';
  });
  endMessage.textContent = `X's turn!`;
  currentPlayer = 'X';
}
