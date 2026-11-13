export const getPiecePosition = (position) => position.split("-").map(Number)

// return : true = white piece , false : black piece
export const pieceType = (position, board) => {
  const [row, col] = getPiecePosition(position)
  return board[row][col] > 0
}
