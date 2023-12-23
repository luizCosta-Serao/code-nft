import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './Components/Inicio/Inicio';
import Header from './Components/Header/Header'

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
