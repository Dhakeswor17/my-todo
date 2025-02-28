type DeleteProps = {
    onDelete: () => void
  }
  
  const Delete = ({ onDelete }: DeleteProps) => {
    return (
      <button className="btn btn-danger btn-sm" onClick={onDelete}>
        Delete
      </button>
    )
  }
  
  export default Delete
  