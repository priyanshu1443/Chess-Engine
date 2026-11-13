import { 
  createPiecePosition,
  canPawnMove, 
  isPawnActivePiece, 
  isRookActivePiece, 
  isBishopActivePiece, 
  isQueenActivePiece,
  isKingActivePiece,
  isKnightActivePiece,
} from "../../../utility/index"
import { pieceMap } from "../../../constants"
import { act } from "react"

function Position({
  board,
  positionBg,
  pieceTurn,
  val,
  rowIndex,
  colIndex,
  activePosition,
  setActivePosition,
  handleUpdateBoard
}) {

  const handleClickPosition = () => {
    const position = createPiecePosition(rowIndex, colIndex)
    console.log(position)

    const isCorrectPiece = (pieceTurn === "w" && val > 0) || (pieceTurn === "b" && val < 0)


    if (activePosition == "" && isCorrectPiece) {
      setActivePosition((prev) => prev === position ? "" : position)
    } else if (activePosition !== "" && !isCorrectPiece && position !== activePosition) {
      if (isPawnActivePiece(activePosition, board) && canPawnMove(activePosition, position, board)) {
        handleUpdateBoard(rowIndex, colIndex)
      } else if (isRookActivePiece(activePosition, board)) {
        console.log("Rook move")
      } else if (isBishopActivePiece(activePosition, board)) {
        console.log("Bishop move")
      } else if (isQueenActivePiece(activePosition, board)) {
        console.log("Queen move")
      } else if (isKingActivePiece(activePosition, board)) {
        console.log("King move")
      } else if (isKnightActivePiece(activePosition, board)) {
        console.log("Knight move")
      }
    } else {
      setActivePosition("")
    }
  }

  return (
    <div
      className={`w-16 h-16 ${positionBg} ${activePosition === `${rowIndex}-${colIndex}` ? "bg-green-300" : ""} border-[1px] border-black flex items-center justify-center`}
      onClick={() => handleClickPosition()}
    >
      {
        val != 0 ? (
          <img src={pieceMap[val > 0 ? val : `n${Math.abs(val)}`]} alt="Chess piece" />
        ) : null
      }
    </div >
  )
}

export default Position
