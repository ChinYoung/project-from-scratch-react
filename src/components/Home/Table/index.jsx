import {
  Table, Column, HeaderCell, Cell
} from 'rsuite-table'

import React from 'react'
import 'rsuite-table/dist/css/rsuite-table.css'
import { Button, Input } from '../../../styledComponent/style'
import cssStyle from './index.module.css'

export default function TodoList(props) {
  const { dataList } = props
  return (
    <Table data={dataList}>
      <Column fixed flexGrow={1}>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>Email</HeaderCell>
        <Cell>
          {(rowData, rowIndex) => {
            return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>
          }}
        </Cell>
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>age</HeaderCell>
        <Cell dataKey="age" />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>sex</HeaderCell>
        <Cell dataKey="sex" />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>profession</HeaderCell>
        <Cell dataKey="profession" />
      </Column>

      <Column flexGrow={1}>
        <HeaderCell>operation</HeaderCell>
        <Cell>
          <Button id={cssStyle.btn}>Delete</Button>
          <Button id={cssStyle.btn}>Edit</Button>
        </Cell>
      </Column>
    </Table>
  )
}
