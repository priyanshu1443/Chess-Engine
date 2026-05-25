import { useNavigate } from "react-router"
import { FaPlay } from "react-icons/fa";

function HomePage() {
  const navigate = useNavigate()

  const handlePlayGame = () => {
    navigate("/chessBoard")
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-600">
      <button
        onClick={() => handlePlayGame()}
        className="group border-2 border-white px-3 py-3 rounded-full cursor-pointer hover:bg-green-400 hover:border-none transition-all duration-600"
      >
        <FaPlay className="text-green-600 text-lg group-hover:text-white transition-colors duration-600" />
      </button>
    </div>
  )
}

export default HomePage
