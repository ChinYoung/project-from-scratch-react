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
    content, start_time, end_time, timestamp, nonce, sig
  } = info
  await axios.post(`${url}/todo`, {
    content, start_time, end_time, timestamp, nonce, sig
  })
}
export { getTodoList, createTodoItem }
