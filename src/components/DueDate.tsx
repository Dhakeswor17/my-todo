import { useState } from 'react'

interface DueDateProps {
  setDueDate: (date: string) => void
}

const DueDate = ({ setDueDate }: DueDateProps) => {
  const [date, setDate] = useState('')

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value
    setDate(newDate)
    setDueDate(newDate) // Pass selected date to parent (Todo.tsx)
  }

  return (
    <div className="input-group mb-3">
      <span className="input-group-text">Due Date</span>
      <input
        type="date"
        className="form-control"
        value={date}
        onChange={handleDateChange}
      />
    </div>
  )
}

export default DueDate
