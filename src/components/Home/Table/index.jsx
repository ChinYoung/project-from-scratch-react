import {
  Table, Column, HeaderCell, Cell
} from 'rsuite-table'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'rsuite-table/dist/css/rsuite-table.css'
import { Button } from '../../../styledComponent/style'
import { deleteTodoItem, getTodoList } from '../../../api'
import { selectTodoList, setTodoList } from '../../../features/todoList/listSlice'
import Dialog from '../Dialog'

export default function TodoList() {
  const dispatch = useDispatch()
  const todoList = useSelector(selectTodoList)
  function deleteRow(rowData) {
    const { todo_id } = rowData
    deleteTodoItem(todo_id).then(() => {
      getTodoList().then((res) => {
        dispatch(setTodoList(res.todoItems))
      })
    })
  }
  return (
    <Table data={todoList} height={300}>
      <Column fixed flexGrow={0.5}>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column fixed flexGrow={1}>
        <HeaderCell>Content</HeaderCell>
        <Cell dataKey="content" />
      </Column>

      <Column flexGrow={1.5}>
        <HeaderCell>start time</HeaderCell>
        <Cell dataKey="start_time" />
      </Column>

      <Column flexGrow={1.5}>
        <HeaderCell>end time</HeaderCell>
        <Cell dataKey="end_time" />
      </Column>

      <Column flexGrow={2}>
        <HeaderCell>todo id</HeaderCell>
        <Cell dataKey="todo_id" />
      </Column>

      <Column flexGrow={1.1}>
        <HeaderCell>operation</HeaderCell>
        <Cell>
          {(rowData) => {
            return (
              <div>
                <Button id="delBtn" onClick={() => { deleteRow(rowData) }}>Delete</Button>
                <Dialog operateType="edit" itemData={rowData} />
              </div>
            )
          }}
        </Cell>
      </Column>
    </Table>
  )
}
