import { useState } from "react"
import Position from "../../components/chessBoard/Position"

const initialBoard = [
  [-4, -2, -3, -5, -6, -3, -2, -4],
  [-1, -1, -1, -1, -1, -1, -1, -1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [4, 2, 3, 5, 6, 3, 2, 4],
]

function ChessBoard() {
  const [activePosition, setActivePosition] = useState("")
  const [board, setBoard] = useState(initialBoard)
  const [turn, setTurn] = useState("w")

  const handleUpdateBoard = (targetRow, targetCol) => {
    const [activeRow, activeCol] = activePosition.split("-").map(Number)
    const activePiece = board[activeRow][activeCol]

    setBoard((prev) => {
      const newBoard = prev.map((row) => row.slice())
      newBoard[targetRow][targetCol] = activePiece
      newBoard[activeRow][activeCol] = 0
      return newBoard
    })
    setActivePosition("")
    setTurn((prev) => prev === "w" ? "b" : "w")
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-amber-300">
      <div className="grid grid-cols-8 grid-rows-8 gap-0 border-2 border-black">
        {
          board.map((row, rowIndex) => (
            row.map((position, positionIndex) => (
              <Position
                key={`${rowIndex}-${positionIndex}`}
                positionBg={(rowIndex + positionIndex) % 2 === 0 ? "bg-gray-200" : "bg-gray-600"}
                pieceTurn={turn}
                val={position}
                rowIndex={rowIndex}
                colIndex={positionIndex}
                activePosition={activePosition}
                setActivePosition={setActivePosition}
                handleUpdateBoard={handleUpdateBoard}
              />
            ))
          ))
        }

      </div>
    </div>
  )
}

export default ChessBoard
