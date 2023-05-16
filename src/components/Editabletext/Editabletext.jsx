import React, { useState, useEffect } from 'react';
import './editabletext.css'

export default function EditableText() {
  const [value, setValue] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem('editableTextValue');
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    localStorage.setItem('editableTextValue', value);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      {editing ? (
        <div>
          <textarea
            className='text-area'
            value={value}
            onChange={handleChange}
          />
          <button onClick={handleSave} className='save-btn'>Save</button>
        </div>
      ) : (
        <div>
          <span>{value}</span>
          <button onClick={handleEdit} className='edit-btn'>Edit</button>
        </div>
      )}
    </div>
  );
}

