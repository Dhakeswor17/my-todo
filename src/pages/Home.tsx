import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to the Todo App</h1>
      <div className="d-flex justify-content-center gap-3">
        <Link to='/Register' className="btn btn-primary">Register</Link>
        <Link to='/Todo' className="btn btn-secondary">Continue Without Register</Link>
      </div>
    </div>
  )
}

export default Home
