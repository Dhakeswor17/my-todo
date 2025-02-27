import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <header>
        <Link to='/Register'>Register</Link>
      </header>
      <h1>Welcome to Todo App</h1>
      <Link to='/Todo'>Go to Todos</Link>
    </div>
  )
}

export default Home
