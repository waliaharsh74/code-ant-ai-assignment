import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/Home'
import LoginPage from './Components/LoginPage'
import './App.css'

function App() {


  return (

    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />


      </Routes>
    </Router>
  )
}

export default App
