import {
  Table, Column, HeaderCell, Cell
} from 'rsuite-table'

import React from 'react'
import { nanoid } from 'nanoid'
import 'rsuite-table/dist/css/rsuite-table.css'
import { Button, Input } from '../../../styledComponent/style'
import cssStyle from './index.module.css'
import { getSign } from '../../../utils/getSign'
import { deleteTodoItem, updateTodoItem } from '../../../api'
import Dialog from '../Dialog'

export default function TodoList(props) {
  const { dataList } = props
  const timestamp = Date.parse(new Date()).toString().slice(0, 10)
  const nonce = nanoid().slice(0, 4)
  const sig = encodeURIComponent(getSign({ timestamp, nonce }))
  const token = window.sessionStorage.getItem('token')
  function deleteRow(rowData) {
    const { todo_id } = rowData
    const todoItem = {
      todo_id, timestamp, nonce, sig, token
    }
    deleteTodoItem(todoItem)
  }
  return (
    <Table data={dataList} height={300}>
      <Column fixed flexGrow={1}>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column flexGrow={2}>
        <HeaderCell>start time</HeaderCell>
        <Cell dataKey="start_time" />
      </Column>

      <Column flexGrow={2}>
        <HeaderCell>end time</HeaderCell>
        <Cell dataKey="end_time" />
      </Column>

      <Column flexGrow={2}>
        <HeaderCell>todo id</HeaderCell>
        <Cell dataKey="todo_id" />
      </Column>

      <Column flexGrow={2}>
        <HeaderCell>owner</HeaderCell>
        <Cell dataKey="owner" />
      </Column>

      <Column flexGrow={1.1}>
        <HeaderCell>operation</HeaderCell>
        <Cell>
          {(rowData, rowIndex) => {
            return (
              <div>
                <Button id={cssStyle.btn} onClick={() => { deleteRow(rowData) }}>Delete</Button>
                <Dialog operateType="edit" itemData={rowData} />
              </div>
            )
          }}
        </Cell>
      </Column>
    </Table>
  )
}
