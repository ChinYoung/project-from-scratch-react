import React from 'react'
import { useNavigate } from 'react-router'
import { Button } from '../../styledComponent/style'
import ownStyle from './index.module.css'

export default function Home() {
  const navigate = useNavigate()
  function Logout() {
    if (window.sessionStorage.getItem('token')) {
      window.sessionStorage.removeItem('token')
      navigate('/libra/login', { replace: true })
    }
  }
  return (
    <div className={ownStyle.header}>
      <Button onClick={Logout}>Logout</Button>
    </div>
  )
}
