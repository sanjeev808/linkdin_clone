import Login from './component/Login'
import React from 'react'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  )
}
