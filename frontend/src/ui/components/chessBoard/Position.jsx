

function Position({
  positionBg,
  pieceTurn,
  val,
  rowIndex,
  colIndex,
  activePosition,
  setActivePosition,
  handleUpdateBoard
}) {
  const pieceMap = {
    1: "/assets/chess-pieces/wP.svg",
    2: "/assets/chess-pieces/wN.svg",
    3: "/assets/chess-pieces/wB.svg",
    4: "/assets/chess-pieces/wR.svg",
    5: "/assets/chess-pieces/wK.svg",
    6: "/assets/chess-pieces/wQ.svg",
    n1: "/assets/chess-pieces/bP.svg",
    n2: "/assets/chess-pieces/bN.svg",
    n3: "/assets/chess-pieces/bB.svg",
    n4: "/assets/chess-pieces/bR.svg",
    n5: "/assets/chess-pieces/bK.svg",
    n6: "/assets/chess-pieces/bQ.svg",
  }
  const handlePositionClick = () => {
    const position = `${rowIndex}-${colIndex}`
    const isCorrectPiece = (pieceTurn === "w" && val > 0) || (pieceTurn === "b" && val < 0)

    if (activePosition == "" && isCorrectPiece) {
      setActivePosition((prev) => prev === position ? "" : position)
    } else if (activePosition !== "" && !isCorrectPiece && position !== activePosition) {
      handleUpdateBoard(rowIndex, colIndex)
    } else {
      setActivePosition("")
    }
  }
  return (
    <div
      className={`w-16 h-16 ${positionBg} ${activePosition === `${rowIndex}-${colIndex}` ? "bg-green-300" : ""} border-[1px] border-black flex items-center justify-center`}
      onClick={() => handlePositionClick()}
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
