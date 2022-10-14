import { setTodoList } from '../../features/todoList/listSlice'

const getTodoList = (state) => {
  return { todoList: state.todoList.value }
}
const handleTodoList = (dispatch) => {
  return {
    setTodoList: (list) => {
      dispatch(setTodoList(list))
    }
  }
}

export { getTodoList, handleTodoList }
