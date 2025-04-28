import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'


export function Navigation() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<h1>Hola mundo</h1>} />
        </Routes>
    </BrowserRouter>
        
    )
}
