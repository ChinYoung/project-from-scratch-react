import { createSlice } from '@reduxjs/toolkit'

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    value: []
  },
  reducers: {
    setTodoList: (state, action) => {
      state.value = action.payload
    }
  }
})

export const {
  setTodoList
} = todoListSlice.actions

export default todoListSlice.reducer
