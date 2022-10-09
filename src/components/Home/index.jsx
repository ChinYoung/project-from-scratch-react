import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Input, Div } from '../../styledComponent/style'
import { getTodoList, searchTodoItems } from '../../api'
import TodoList from './Table'
import Dialog from './Dialog'
import ListContext from '../../context'

export default function Home() {
  const { Provider } = ListContext
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
        const targetItem = { ...res.data, todo_id: res.data.id, id: '0' }
        setTodoList([targetItem])
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
    <Div id="table">
      <Div id="header">
        <Button onClick={Logout}>Logout</Button>
      </Div>
      <Provider value={{ todoList, setTodoList }}>
        <Div id="box">
          <Input id="searchInput" onChange={(e) => { setSearch(e.target.value) }}></Input>
          <Button id="searchBtn" onClick={searchItems}>Search</Button>
          <Dialog />
        </Div>
        <TodoList />
      </Provider>
    </Div>
  )
}
