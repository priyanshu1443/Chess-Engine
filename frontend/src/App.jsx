import { Routes, Route } from 'react-router-dom'
import HomePage from './ui/pages/homePage/HomePage'
import ChessBoard from './ui/pages/chessBoard/ChessBoard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chessBoard" element={<ChessBoard />} />
    </Routes>
  )
}

export default App
