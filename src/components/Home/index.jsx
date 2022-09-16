import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { nanoid } from 'nanoid'
import { Button, Input } from '../../styledComponent/style'
import ownStyle from './index.module.css'
import { getTodoList, searchTodoItems } from '../../api'
import { getSign } from '../../utils/getSign'
import TodoList from './Table'
import Dialog from './Dialog'

export default function Home() {
  const navigate = useNavigate()
  const [allItems, setAllItems] = useState([])
  let [todoList, setTodoList] = useState([])
  let [search, setSearch] = useState('')
  const token = window.sessionStorage.getItem('token')
  useEffect(() => {
    const timestamp = Date.parse(new Date()).toString().slice(0, 10)
    const nonce = nanoid().slice(0, 4)
    const plainObj = {
      pageSize: 10,
      pageNumber: 0,
      timestamp,
      nonce
    }
    const sig = encodeURIComponent(getSign(plainObj))
    getTodoList(timestamp, nonce, sig, token).then((res) => {
      if (res?.todoItems) {
        setAllItems(res.todoItems)
        setTodoList(res.todoItems)
      }
    })
  }, [])

  function searchItems() {
    if (search.trim() === '') setTodoList(allItems)
    else {
      const timestamp = Date.parse(new Date()).toString().slice(0, 10)
      const nonce = nanoid().slice(0, 4)
      const obj = { timestamp, nonce }
      const sig = encodeURIComponent(getSign(obj))
      const itemInfo = {
        todo_id: search,
        timestamp,
        nonce,
        sig,
        token
      }
      searchTodoItems(itemInfo).then((res) => {
        setTodoList([res.data])
      })
    }
  }

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
        <Input id={ownStyle.input} onChange={(e) => { setSearch(e.target.value) }}></Input>
        <Button id={ownStyle.btn1} onClick={searchItems}>Search</Button>
        <Dialog id={ownStyle.btn2} />
      </div>
      <TodoList dataList={todoList} />
    </div>
  )
}
