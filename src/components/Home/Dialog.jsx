import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Button, Modal } from 'antd'
import { nanoid } from 'nanoid'
import { Input } from '../../styledComponent/style'
import { createTodoItem } from '../../api'
import { getSign } from '../../utils/getSign'

export default function Dialog() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [info, setInfo] = useState({ start_time: '', end_time: '', content: '' })
  const timestamp = Date.parse(new Date()).toString().slice(0, 10)
  const nonce = nanoid().slice(0, 4)
  const plainObj = { ...info, timestamp, nonce }
  const sig = encodeURIComponent(getSign(plainObj))
  const postBody = { ...plainObj, sig }
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    createTodoItem(postBody).then((res) => {
      console.log(res)
    })
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal title="Add" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="Please input start time" onChange={(e) => setInfo({ ...info, start_time: e.target.value })} />
        <Input placeholder="Please input end time" onChange={(e) => setInfo({ ...info, end_time: e.target.value })} />
        <Input placeholder="Please input content" onChange={(e) => setInfo({ ...info, content: e.target.value })} />
      </Modal>
    </>
  )
}
