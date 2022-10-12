import { configureStore } from '@reduxjs/toolkit'
import ListReducer from '../features/todoList/listSlice'

export default configureStore({
  reducer: {
    todoList: ListReducer,
  },
})
