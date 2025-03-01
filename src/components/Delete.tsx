interface DeleteProps {
    index: number  // Add this
    deleteTodo: (index: number) => void
  }
  
  const Delete = ({ index, deleteTodo }: DeleteProps) => (
    <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(index)}>Delete</button>
  )
  
  export default Delete
  