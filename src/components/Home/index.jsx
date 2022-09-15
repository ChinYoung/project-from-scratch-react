import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { nanoid } from 'nanoid'
import { Button } from '../../styledComponent/style'
import ownStyle from './index.module.css'
import { getTodoList } from '../../api'
import { getSign } from '../../utils/getSign'
import TodoList from './Table'

export default function Home() {
  const navigate = useNavigate()
  let [todoList, setTodoList] = useState([])

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
      setTodoList(res.todoItems)
    })
  }, [])

  function Logout() {
    if (window.sessionStorage.getItem('token')) {
      window.sessionStorage.removeItem('token')
      navigate('/libra/login', { replace: true })
    }
  }

  // function Tr(props) {
  //   const { info } = props
  //   const attrs = Object.entries(info)
  //   const person = attrs.map((item) => {
  //     <td key={item[0]}>{ item[1] }</td>
  //   })
  //   return (
  //     <tr>
  //       {person}
  //     </tr>
  //   )
  // }

  // function TableList(props) {
  //   const { list } = props
  //   const listItems = list.map((item) => {
  //     <Tr key={item.id} info={item} />
  //   })
  //   return (
  //     <tbody>
  //       {listItems}
  //     </tbody>
  //   )
  // }

  return (
    <div>
      <div className={ownStyle.header}>
        <Button onClick={Logout}>Logout</Button>
      </div>
      <TodoList dataList={todoList} />
    </div>
  )
}
