let currentPlayer = 'X';

function makeMove(cell) {
  if (cell.textContent === '') {  // Solo permite marcar si la celda está vacía
    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';  // Alterna entre 'X' y 'O'
  }
}
