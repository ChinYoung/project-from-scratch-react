import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Input } from '../../styledComponent/style'
import ownStyle from './index.module.css'
import { getTodoList, searchTodoItems } from '../../api'
import TodoList from './Table'
import Dialog from './Dialog'

export default function Home() {
  const navigate = useNavigate()
  const [allItems, setAllItems] = useState([])
  let [todoList, setTodoList] = useState([])
  let [search, setSearch] = useState('')
  function getList() {
    getTodoList().then((res) => {
      if (res?.todoItems) {
        setAllItems(res.todoItems)
        setTodoList(res.todoItems)
      }
    })
  }
  useEffect(() => {
    getList()
  }, [])

  function searchItems() {
    if (search.trim() === '') setTodoList(allItems)
    else {
      searchTodoItems(search).then((res) => {
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
