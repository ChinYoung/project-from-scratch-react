import { connect } from 'react-redux'
import { handleTodoList } from '../connectParams'
import DialogUI from '../../components/Home/Dialog'

export default connect(null, handleTodoList)(DialogUI)
