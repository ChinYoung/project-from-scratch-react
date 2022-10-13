import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../components/Login'
import Home from '../components/Home'
import { ComContainer } from './style'

export default function routes() {
  return (
    <ComContainer>
      <Routes>
        <Route path="/libra/" element={<LoginPage />} />
        <Route path="/libra/login" element={<LoginPage />} />
        <Route path="/libra/home" element={<Home />} />
      </Routes>
    </ComContainer>
  )
}
