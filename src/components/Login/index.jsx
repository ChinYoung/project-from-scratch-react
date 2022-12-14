import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Label, Input, Button
} from '../../style'
import { LoginBox, InputBox } from './style'

export default function LoginPage() {
  let [user, setUser] = useState({ username: '', password: '' })
  const navigate = useNavigate()
  const params = new URLSearchParams(window.location.search)
  const token = params.get('token')

  useEffect(() => {
    if (token) {
      window.sessionStorage.setItem('token', token)
      navigate('/libra/home', { replace: true })
    }
  }, [])

  function Login() {
    window.open(
      'https://github.com/login/oauth/authorize?client_id=ad1304e89d9bb4b22337&redirect_uri=https://www.rakki.fun:30789/libra/oauthcb',
    )
  }

  return (
    <LoginBox>
      <InputBox>
        <Label>username</Label>
        <Input onChange={(e) => setUser({ ...user, username: e.target.value })} />
      </InputBox>
      <InputBox>
        <Label>password</Label>
        <Input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      </InputBox>
      <Button onClick={Login}>Login</Button>
    </LoginBox>
  )
}
