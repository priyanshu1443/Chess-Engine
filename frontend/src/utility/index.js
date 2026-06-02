export const createPiecePosition = (row, col) => `${row}-${col}`

export const getPiecePosition = (position) => position.split("-").map(Number)

export const absoluteVal = (val) => Math.abs(val)

// return : true = white piece , false : black piece
export const pieceType = (position, board) => {
  const [row, col] = getPiecePosition(position)
  return board[row][col] > 0
}

export const isPawn = (pieceVal) => {
  return Math.abs(pieceVal) === 1
}

export const isPawnFirstMove = (position, board) => {
  const [row, col] = getPiecePosition(position)
  const whitePiece = pieceType(position, board)
  return whitePiece ? row === 6 : row === 1
}

export const canPawnMove = (activePosition, targetPosition, board) => {
  const [currentRow, currentCol] = getPiecePosition(activePosition)
  const [targetRow, targetCol] = getPiecePosition(targetPosition)

  const firstMove = isPawnFirstMove(activePosition, board)
  const whitePiece = pieceType(activePosition, board)


  if (whitePiece && currentCol === targetCol) {
    if (firstMove && currentRow - 2 === targetRow) return true
    if (currentRow - 1 === targetRow) return true
    return false
  }

  if (!whitePiece && currentCol === targetCol) {
    if (firstMove && currentRow + 2 === targetRow) return true
    if (currentRow + 1 === targetRow) return true
    return false
  }

  return false
}

// position : active piece position
// board : current board position
export const isPawnActivePiece = (position, board) => {
  const [row, col] = getPiecePosition(position)
  return absoluteVal(board[row][col]) === 1
}
