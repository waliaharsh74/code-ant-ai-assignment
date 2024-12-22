import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/Home'
import LoginPage from './Components/LoginPage'
import './App.css'
import ErrorPage from './Components/ErrorPage'

function App() {


  return (

    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='*' element={<ErrorPage />} />


      </Routes>
    </Router>
  )
}

export default App
