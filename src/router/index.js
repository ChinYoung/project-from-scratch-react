import { useRoutes, Navigate } from 'react-router-dom'

const Login = () => import('../components/Login')
const Home = () => import('../components/Home')

const elements = useRoutes([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/',
    element: <Navigate to="/login" />
  }
])

export default elements
