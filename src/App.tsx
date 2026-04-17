import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InfoPage from './pages/InfoPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InfoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App