import axios from 'axios'

const url = import.meta.env.VITE_URL
const getTodoList = async (timestamp, nonce, sig, token) => {
  const { data: res } = await axios.get(`${url}/todo?pageSize=10&pageNumber=0&timestamp=${timestamp}&nonce=${nonce}&sig=${sig}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return res.data
}
const createTodoItem = async (info) => {
  const {
    content, start_time, end_time, timestamp, nonce, sig, token
  } = info
  await axios.post(
    `${url}/todo`,
    {
      content,
      start_time,
      end_time,
      timestamp,
      nonce,
      sig
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}
const deleteTodoItem = async (info) => {
  const {
    todo_id, timestamp, nonce, sig, token
  } = info
  await axios.delete(`${url}/todo/${todo_id}?timestamp=${timestamp}&nonce=${nonce}&sig=${sig}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
const updateTodoItem = async (info) => {
  const { todo_id, token } = info
  const { data: res } = await axios.post(`${url}/todo/${todo_id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  console.log('edit', todo_id, res)
}
const searchTodoItems = async (info) => {
  const {
    todo_id, timestamp, nonce, sig, token
  } = info
  const { data: res } = await axios.get(`${url}/todo/${todo_id}?timestamp=${timestamp}&nonce=${nonce}&sig=${sig}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return res
}
export {
  getTodoList, createTodoItem, deleteTodoItem, updateTodoItem, searchTodoItems
}
