import { useState } from 'react'

interface DueDateProps {
    index: number;
    dueDate: string;  
    setDueDate: (index: number, date: string) => void;
}

const DueDate = ({ index, dueDate, setDueDate }: DueDateProps) => {
  const [date, setDate] = useState(dueDate)

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value
    const today = new Date().toISOString().split('T')[0]

    if (newDate < today) {
      alert('You cannot schedule a task for a past date.')
      return
    }

    setDate(newDate)
    setDueDate(index, newDate)
  }

  return (
    <div className="input-group mb-3">
      <span className="input-group-text">Due Date</span>
      <input
        type="date"
        className="form-control"
        value={date}
        onChange={handleDateChange}
        min={new Date().toISOString().split('T')[0]} // Set min date to today
      />
    </div>
  )
}

export default DueDate