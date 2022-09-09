import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './index.module.css'
import { Label, Input, Button } from '../../styledComponent/style'

export default function LoginPage() {
  let [user, setUser] = useState({ username: '', password: '' })

  function Login() {
    const navigate = useNavigate()
    const search = window.location.search.substring(1)
    const params = search.split('&')
    const token = params.map((item) => {
      const [name, value] = item.split('=')
      if (name === 'token') { return value }
    })
    if (token.length !== 0) {
      window.sessionStorage.setItem('token', token[0])
      navigate('/libra/home', { replace: true })
    } else {
      window.open(
        'https://github.com/login/oauth/authorize?client_id=ad1304e89d9bb4b22337&redirect_uri=https://www.rakki.fun:30789/libra/oauthcb',
      )
    }
  }

  return (
    <div className={style.loginBox}>
      <div className={style.inputBox}>
        <Label>username</Label>
        <Input onChange={(e) => setUser({ ...user, username: e.target.value })} />
      </div>
      <div className={style.inputBox}>
        <Label>password</Label>
        <Input type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      </div>
      <Button onClick={Login}>Login</Button>
    </div>
  )
}
