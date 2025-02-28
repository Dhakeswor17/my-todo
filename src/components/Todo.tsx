import { useState, useEffect } from 'react'
import Delete from './Delete' // Import the Delete component

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([])
  const user = localStorage.getItem('todoUser')

  // Load saved todos from localStorage (if registered)
  useEffect(() => {
    if (user) {
      const savedTodos = JSON.parse(localStorage.getItem(`${user}_todos`) || '[]')
      setTodos(savedTodos)
    }
  }, [user])

  // Add a new todo
  const addTodo = (newTodo: string) => {
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  // Save todos to localStorage (for registered users only)
  const saveTodos = (updatedTodos: string[]) => {
    if (user) {
      localStorage.setItem(`${user}_todos`, JSON.stringify(updatedTodos))
    }
  }

  // Delete handler passed to Delete component
  const handleDelete = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    setTodos(updatedTodos)
    saveTodos(updatedTodos)
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-5 text-center" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="mb-4">Welcome, {user ? user : 'Guest'}!</h2>

        <TodoInput addTodo={addTodo} />

        {/* Todo List */}
        <ul className="list-group mt-4">
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {todo}
                <Delete onDelete={() => handleDelete(index)} />
              </li>
            ))
          ) : (
            <li className="list-group-item text-muted">No todos yet. Add one!</li>
          )}
        </ul>
      </div>
    </div>
  )
}

const TodoInput = ({ addTodo }: { addTodo: (todo: string) => void }) => {
  const [input, setInput] = useState('')

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input)
      setInput('')
    }
  }

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Add new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Todo
