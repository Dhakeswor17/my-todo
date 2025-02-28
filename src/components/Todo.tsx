import { useState, useEffect } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([])
  const user = localStorage.getItem('todoUser')

  useEffect(() => {
    if (user) {
      const savedTodos = JSON.parse(localStorage.getItem(`${user}_todos`) || '[]')
      setTodos(savedTodos)
    }
  }, [user])

  const addTodo = (newTodo: string) => {
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    if (user) {
      localStorage.setItem(`${user}_todos`, JSON.stringify(updatedTodos))
    }
  }

  return (
    <div>
      <h1>Todo List {user ? `(Saved for ${user})` : '(Not Saved)'}</h1>
      <TodoInput addTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
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
    <div>
      <input
        type='text'
        placeholder='Add new todo'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default Todo
