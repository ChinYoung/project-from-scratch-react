import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Input } from '../../style'
import { Header, Box, Table } from './style'
import { getTodoList, searchTodoItems } from '../../api'
import TodoList from './Table'
import Dialog from '../../containers/Home/Dialog'

export default function Home(props) {
  const { todoList, setTodoList } = props
  const navigate = useNavigate()
  let [search, setSearch] = useState('')
  let [allItems, setAllItems] = useState([])
  function getList() {
    getTodoList().then((res) => {
      if (res?.todoItems) {
        setTodoList(res.todoItems)
        setAllItems(res.todoItems)
      }
    })
  }
  useEffect(() => {
    getList()
  }, [])

  function searchItems() {
    if (search.trim() === '') {
      setTodoList(allItems)
    } else {
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
    <Table>
      <Header>
        <Button onClick={Logout}>Logout</Button>
      </Header>
      <Box>
        <Input id="searchInput" onChange={(e) => { setSearch(e.target.value) }}></Input>
        <Button id="searchBtn" onClick={searchItems}>Search</Button>
        <Dialog />
      </Box>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </Table>
  )
}
