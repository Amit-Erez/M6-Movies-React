import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Results from './pages/Results/Results'
import Info from './pages/Info/Info'
import Nav from './components/Nav'

const App = () => {

  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/findmovie' element={<Results />}/>
        <Route path='/movieinfo' element={<Info />}/>
      </Routes>
    </div>
  )
}

export default App
