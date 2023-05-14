import React, { useState } from 'react';
import './editabletext.css'



 export default function EditableText() {
  const [value, setValue] = useState('');
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      {editing ? (
        <div >
          <textarea
           className='text-area'
            value={value}
            onChange={handleChange}
          />
          <button onClick={handleSave}
          className='save-btn'>Save </button>
        </div>
      ) : (
        <div>
          <span>{value}</span>
          <button onClick={handleEdit}
          className='edit-btn'
          >Edit</button>
        </div>
      )}
    </div>
  );
}
