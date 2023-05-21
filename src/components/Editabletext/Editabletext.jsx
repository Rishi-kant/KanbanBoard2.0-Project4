import React, { useState } from "react";
import "./editabletext.css";
import { useDispatch } from "react-redux";
import { addDescription } from "../../redux/board";
import { useParams } from "react-router-dom";

export default function EditableText({ columnId, taskId, initialValue, onSave }) {
  const { boardId, cardId } = useParams();
  const [value, setValue] = useState(initialValue);
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    onSave(value);
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {editing ? (
        <div>
          <textarea className="text-area" value={value} onChange={handleChange} />
          <button onClick={handleSave} className="save-btn">
            Save
          </button>
        </div>
      ) : (
        <div>
          <span>{value}</span>
          <button onClick={handleEdit} className="edit-btn">
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

