import React from 'react'

type DeleteProps = {
  onDelete: () => void
}

const Delete: React.FC<DeleteProps> = ({ onDelete }) => {
  return (
    <button
      className="btn btn-danger btn-sm"
      onClick={onDelete}
    >
      Delete
    </button>
  )
}

export default Delete
