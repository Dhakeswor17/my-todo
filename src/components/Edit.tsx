import { useState } from 'react';

interface EditProps {
  index: number;
  todo: string;
  updateTodo: (index: number, newTodo: string) => void;
}

const Edit = ({ index, todo, updateTodo }: EditProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo);

  const handleSave = () => {
    if (newText.trim()) {
      updateTodo(index, newText); // Save the updated todo
      setIsEditing(false); // Exit edit mode
    } else {
      alert('Todo cannot be empty!'); // Validation for empty input
    }
  };

  return (
    <div className="d-inline ms-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="form-control d-inline w-auto"
          />
          <button className="btn btn-success btn-sm ms-2" onClick={handleSave}>
            Save
          </button>
          <button
            className="btn btn-secondary btn-sm ms-2"
            onClick={() => {
              setIsEditing(false); // Cancel edit mode without saving
              setNewText(todo); // Reset the input to the original todo text
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <button className="btn btn-warning btn-sm" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}
    </div>
  );
};

export default Edit;