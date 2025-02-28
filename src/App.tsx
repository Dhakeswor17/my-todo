import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Todo from './components/Todo'

import './App.css'


 
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Todo' element={<Todo />} />
      </Routes>
    </Router>
  )
}

export default App



