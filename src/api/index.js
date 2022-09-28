import axios from 'axios'
import { nanoid } from 'nanoid'
import { getSign } from '../utils/getSign'

const url = import.meta.env.VITE_URL
const timestamp = Date.parse(new Date()).toString().slice(0, 10)
const nonce = nanoid().slice(0, 4)

axios.interceptors.request.use((config) => {
  const token = window.sessionStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  let sig = ''
  if (config.method !== 'post') {
    sig = getSign(config.params)
    config.params.sig = sig
  } else {
    sig = getSign(config.data)
    config.data.sig = sig
  }
  return config
})

const getTodoList = async () => {
  const plainObj = {
    pageSize: 10,
    pageNumber: 0,
    timestamp,
    nonce
  }
  const { data: res } = await axios.get(
    `${url}/todo/`,
    { params: plainObj }
  )
  return res.data
}

const createTodoItem = async (info) => {
  const data = {
    ...info,
    timestamp,
    nonce
  }
  await axios.post(`${url}/todo`, { ...data })
}

const deleteTodoItem = async (todo_id) => {
  const params = {
    timestamp,
    nonce
  }
  await axios.delete(`${url}/todo/${todo_id}`, { params })
}

const updateTodoItem = async (info) => {
  const {
    todo_id, content, start_time, end_time
  } = info
  const data = {
    content,
    start_time,
    end_time,
    timestamp,
    nonce
  }
  await axios.post(`${url}/todo/${todo_id}`, { ...data })
}

const searchTodoItems = async (todo_id) => {
  const params = { timestamp, nonce }
  const { data: res } = await axios.get(`${url}/todo/${todo_id}`, {
    params
  })
  return res
}
export {
  getTodoList, createTodoItem, deleteTodoItem, updateTodoItem, searchTodoItems
}
