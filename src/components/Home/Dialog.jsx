import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Modal, message } from 'antd'
import { Input, Button } from '../../style'
import { createTodoItem, updateTodoItem, getTodoList } from '../../api'

export default function Dialog(props) {
  const { setTodoList, operateType, itemData } = props
  const title = operateType || 'Add'
  const btnId = (title === 'Add' ? '' : 'delBtn')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [info, setInfo] = useState({ start_time: '', end_time: '', content: '' })
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
          setTodoList(res.todoItems)
        })
      })
      setIsModalOpen(false)
    } else {
      const {
        todo_id, content, end_time, start_time
      } = itemData
      const oldInfo = { start_time, end_time, content }
      if (Object.values(info).toString().split(',').join('') === '') {
        warning('Please fill in the form!')
      } else if (Object.entries(oldInfo).toString() !== Object.entries(info).toString()) {
        const updateInfo = { ...info, todo_id }
        updateTodoItem(updateInfo).then(() => {
          getTodoList().then((res) => {
            setTodoList(res.todoItems)
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
      <Button id={btnId} onClick={showModal}>
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
