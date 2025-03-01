import { useState, useEffect } from 'react'
import DueDate from './DueDate'
import Delete from './Delete'

interface TodoItem {
  text: string
  dueDate: string
}

const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [dueDate, setDueDate] = useState<string>('')

  const user = localStorage.getItem('todoUser')

  useEffect(() => {
    if (user) {
      const savedTodos = JSON.parse(localStorage.getItem(`${user}_todos`) || '[]')
      setTodos(savedTodos)
    }
  }, [user])

  const addTodo = (newTodo: string) => {
    const todoItem: TodoItem = { text: newTodo, dueDate }
    const updatedTodos = [...todos, todoItem]
    setTodos(updatedTodos)

    if (user) {
      localStorage.setItem(`${user}_todos`, JSON.stringify(updatedTodos))
    }
  }

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    setTodos(updatedTodos)

    if (user) {
      localStorage.setItem(`${user}_todos`, JSON.stringify(updatedTodos))
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-5 text-center" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="mb-4">Welcome, {user ? user : 'Guest'}!</h2>

        <DueDate setDueDate={setDueDate} />
        <TodoInput addTodo={addTodo} />
        
        <ul className="list-group mt-4">
          {todos.map((todo, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                {todo.text}
                <small className="text-muted d-block">Due: {todo.dueDate || 'No Due Date'}</small>
              </div>
              <Delete index={index} deleteTodo={deleteTodo} />
            </li>
          ))}
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
    <div className="input-group mb-3">
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
