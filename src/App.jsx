import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Results from './pages/Results/Results'
import Info from './pages/Info/Info'

const App = () => {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/findmovie' element={<Results />}/>
        <Route path='/info/:id' element={<Info />}/>
      </Routes>
    </div>
  )
}

export default App
