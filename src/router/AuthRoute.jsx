import React from 'react'
import { message } from 'antd'
import { Navigate } from 'react-router-dom'

export default function authRoute({ children }) {
  const isLogin = window.sessionStorage.getItem('token')
  const success = () => {
    message.success('Please login first')
  }
  if (!isLogin) {
    success()
    return <Navigate to="/libra/" replace />
  }
  return <>{ children }</>
}
