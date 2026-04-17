import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'
import ErrorBoundary from './components/ErrorBoundary'
import InfoPage from './pages/InfoPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<InfoPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App