import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { nanoid } from 'nanoid'
import { Button, Input } from '../../styledComponent/style'
import ownStyle from './index.module.css'
import { getTodoList } from '../../api'
import { getSign } from '../../utils/getSign'
import TodoList from './Table'
import Dialog from './Dialog'

export default function Home() {
  const navigate = useNavigate()
  let [todoList, setTodoList] = useState([
    {
      id: '001', name: 'mery', email: '121212@qq.com', age: '22', profession: 'doctor', sex: 'male'
    },
    {
      id: '002', name: 'mary', email: '121212@qq.com', age: '22', profession: 'doctor', sex: 'female'
    }
  ])
  useEffect(() => {
    const timestamp = Date.parse(new Date()).toString().slice(0, 10)
    const nonce = nanoid().slice(0, 4)
    const token = window.sessionStorage.getItem('token')
    const plainObj = {
      pageSize: 10,
      pageNumber: 0,
      timestamp,
      nonce
    }
    const sig = encodeURIComponent(getSign(plainObj))
    getTodoList(timestamp, nonce, sig, token).then((res) => {
      if (res?.todoItems) { setTodoList(res.todoItems) }
    })
  }, [])

  function Logout() {
    if (window.sessionStorage.getItem('token')) {
      window.sessionStorage.removeItem('token')
      navigate('/libra/login', { replace: true })
    }
  }

  return (
    <div>
      <div className={ownStyle.header}>
        <Button onClick={Logout}>Logout</Button>
      </div>
      <div id={ownStyle.box}>
        <Input id={ownStyle.input}></Input>
        <Button id={ownStyle.btn1}>Search</Button>
        <Dialog id={ownStyle.btn2} />
      </div>
      <TodoList dataList={todoList} />
    </div>
  )
}
