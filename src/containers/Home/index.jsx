import { connect } from 'react-redux'
import { getTodoList, handleTodoList } from '../connectParams'
import HomeUI from '../../components/Home'

export default connect(getTodoList, handleTodoList)(HomeUI)
