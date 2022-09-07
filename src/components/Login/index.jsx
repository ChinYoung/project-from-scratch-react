import React, { Component, useState } from 'react'
import style from './index.module.css'
import { Label, Input, Button } from '../../styledComponent/style'

function LoginPage() {
  let [user, setUser] = useState({ username: '', password: '' })

  function Login() {
    window.open(
      'https://github.com/login/oauth/authorize?client_id=ad1304e89d9bb4b22337&redirect_uri=https://www.rakki.fun:30789/libra/oauthcb',
    )
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

export default LoginPage
