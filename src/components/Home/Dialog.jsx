import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Modal, message } from 'antd'
import { Input, Button } from '../../styledComponent/style'
import cssStyle from './Table/index.module.css'
import { createTodoItem, updateTodoItem, getTodoList } from '../../api'

export default function Dialog(props) {
  const { operateType, itemData, updateList } = props
  const title = operateType || 'Add'
  const btnStyle = (title === 'Add' ? '' : cssStyle.btn)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [info, setInfo] = useState({ start_time: '', end_time: '', content: '' })
  let newList = []
  const clearFilm = () => {
    setInfo({ start_time: '', end_time: '', content: '' })
  }
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    if (title === 'Add') {
      createTodoItem(info).then(() => {
        getTodoList().then((res) => {
          newList = res.todoItems
          updateList(newList)
        })
      })
      setIsModalOpen(false)
    } else {
      console.log('1', updateList)
      const {
        todo_id, content, end_time, start_time
      } = itemData
      const oldInfo = { start_time, end_time, content }
      if (Object.values(info).toString().split(',').join('') === '') {
        warning('Please fill in the form!')
      } else if (Object.entries(oldInfo).toString() !== Object.entries(info).toString()) {
        const updateInfo = { ...info, todo_id }
        console.log('2', updateList)
        updateTodoItem(updateInfo).then(() => {
          console.log('3', updateList)
          getTodoList().then((res) => {
            newList = res.todoItems
            updateList(newList)
          })
        })
        setIsModalOpen(false)
      } else {
        warning('The contents should not be same as before, please fill in the form again!')
      }
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const warning = (warn) => {
    message.warning(warn)
  }

  return (
    <>
      <Button onClick={showModal} id={btnStyle}>
        {title}
      </Button>
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Please input start time" onChange={(e) => setInfo({ ...info, start_time: e.target.value })} />
        <Input placeholder="Please input end time" onChange={(e) => setInfo({ ...info, end_time: e.target.value })} />
        <Input placeholder="Please input content" onChange={(e) => setInfo({ ...info, content: e.target.value })} />
      </Modal>
    </>
  )
}
