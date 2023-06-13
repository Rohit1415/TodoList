import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NewList from './NewList'

function Route_file() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Navigate to='/1' /> } />
            <Route path='/1' element={<NewList />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Route_file