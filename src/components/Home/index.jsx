import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setTodoList } from '../../features/todoList/listSlice'
import { Button, Input } from '../../style'
import { Header, Box, Table } from './style'
import { getTodoList, searchTodoItems } from '../../api'
import TodoList from './Table'
import Dialog from './Dialog'

export default function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [allItems, setAllItems] = useState([])
  let [search, setSearch] = useState('')
  function getList() {
    getTodoList().then((res) => {
      if (res?.todoItems) {
        dispatch((setTodoList(res.todoItems)))
        setAllItems(res.todoItems)
      }
    })
  }
  useEffect(() => {
    getList()
  }, [])

  function searchItems() {
    if (search.trim() === '') dispatch((setTodoList(allItems)))
    else {
      searchTodoItems(search).then((res) => {
        const targetItem = { ...res.data, todo_id: res.data.id, id: '0' }
        dispatch((setTodoList([targetItem])))
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
      <TodoList />
    </Table>
  )
}
