import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Modal } from 'antd'
import { nanoid } from 'nanoid'
import { Input, Button } from '../../styledComponent/style'
import cssStyle from './Table/index.module.css'
import { createTodoItem, updateTodoItem } from '../../api'
import { getSign } from '../../utils/getSign'

export default function Dialog(props) {
  const { operateType, itemData } = props
  const title = operateType || 'Add'
  const btnStyle = (title === 'Add' ? '' : cssStyle.btn)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [info, setInfo] = useState({ start_time: '', end_time: '', content: '' })
  const timestamp = Date.parse(new Date()).toString().slice(0, 10)
  const nonce = nanoid().slice(0, 4)
  const plainObj = { ...info, timestamp, nonce }
  const sig = getSign(plainObj)
  const token = window.sessionStorage.getItem('token')
  const postBody = { ...plainObj, sig, token }
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    if (title === 'Add') {
      createTodoItem(postBody)
    } else {
      const { todo_id } = itemData
      updateTodoItem({ todo_id, token })
    }
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
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
