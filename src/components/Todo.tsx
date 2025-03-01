import { useState, useEffect } from 'react'
import Delete from './Delete'
import DueDate from './DueDate'
import Edit from './Edit'

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [dueDates, setDueDates] = useState<string[]>([])
  const user = localStorage.getItem('todoUser')

  useEffect(() => {
    if (user) {
      const savedTodos = JSON.parse(localStorage.getItem(`${user}_todos`) || '[]')
      const savedDueDates = JSON.parse(localStorage.getItem(`${user}_dueDates`) || '[]')

      setTodos(savedTodos)
      setDueDates(savedDueDates)
    }
  }, [user])

  const addTodo = (newTodo: string) => {
    const updatedTodos = [...todos, newTodo]
    const updatedDueDates = [...dueDates, '']

    setTodos(updatedTodos)
    setDueDates(updatedDueDates)

    saveToLocalStorage(updatedTodos, updatedDueDates)
  }

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    const updatedDueDates = dueDates.filter((_, i) => i !== index)

    setTodos(updatedTodos)
    setDueDates(updatedDueDates)

    saveToLocalStorage(updatedTodos, updatedDueDates)
  }

  const updateTodo = (index: number, newTodo: string) => {
    const updatedTodos = todos.map((todo, i) => (i === index ? newTodo : todo))
    setTodos(updatedTodos)
    saveToLocalStorage(updatedTodos, dueDates)
  }

  const setDueDate = (index: number, date: string) => {
    const updatedDueDates = dueDates.map((d, i) => (i === index ? date : d))
    setDueDates(updatedDueDates)
    saveToLocalStorage(todos, updatedDueDates)
  }

  const saveToLocalStorage = (updatedTodos: string[], updatedDueDates: string[]) => {
    if (user) {
      localStorage.setItem(`${user}_todos`, JSON.stringify(updatedTodos))
      localStorage.setItem(`${user}_dueDates`, JSON.stringify(updatedDueDates))
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-5 text-center" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="mb-4">Welcome, {user ? user : 'Guest'}!</h2>
        <TodoInput addTodo={addTodo} />
        <ul className="list-group mt-4">
          {todos.map((todo, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div className="text-start">
                {todo}
                <DueDate index={index} dueDate={dueDates[index] || ''} setDueDate={setDueDate} />
              </div>
              <div>
                <Edit index={index} todo={todo} updateTodo={updateTodo} />
                <Delete index={index} deleteTodo={deleteTodo} />
              </div>
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
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Add new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAdd}>
        Add
      </button>
    </div>
  )
}

export default Todo
