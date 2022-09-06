import React, { Component } from 'react'
import style from './index.module.css'
import { Label, Input, Button } from '../../styledComponent/style'

export default class Login extends Component {
  state = { username: '', password: '' }

  changeUser = (prop, e) => {
    if (prop === 'password') {
      this.setState({ password: e.target.value })
    } else if (prop === 'username') {
      this.setState({ username: e.target.value })
    }
  }

  Login = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div className={style.loginBox}>
        <div className={style.inputBox}>
          <Label>username</Label>
          <Input onChange={(e) => this.changeUser('username', e)} />
        </div>
        <div className={style.inputBox}>
          <Label>password</Label>
          <Input type="password" onChange={(e) => this.changeUser('password', e)} />
        </div>
        <Button onClick={this.Login}>Login</Button>
      </div>
    )
  }
}
