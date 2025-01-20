import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import MainPgae from './pages/MainPage'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path='/main' element={<MainPgae />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App