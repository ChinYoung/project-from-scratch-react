import {
  Table, Column, HeaderCell, Cell
} from 'rsuite-table'

import React from 'react'
import 'rsuite-table/dist/css/rsuite-table.css'

export default function TodoList(props) {
  const { dataList } = props
  return (
    <Table data={dataList}>
      <Column flexGrow={1} fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column flexGrow={1} resizable>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column flexGrow={1} resizable>
        <HeaderCell>Email</HeaderCell>
        <Cell>
          {(rowData, rowIndex) => {
            return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>
          }}
        </Cell>
      </Column>

      <Column flexGrow={1} resizable>
        <HeaderCell>age</HeaderCell>
        <Cell dataKey="age" />
      </Column>

      <Column flexGrow={1} resizable>
        <HeaderCell>sex</HeaderCell>
        <Cell dataKey="sex" />
      </Column>

      <Column flexGrow={1} resizable>
        <HeaderCell>profession</HeaderCell>
        <Cell dataKey="profession" />
      </Column>
    </Table>
  )
}
