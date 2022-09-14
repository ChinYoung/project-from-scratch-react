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
export { getTodoList }
