import React, { useState, useEffect } from 'react';
import './editabletext.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addDescription } from '../../redux/board';

export default function EditableText({columnId,taskId}) {
  const [value, setValue] = useState('');
  const [editing, setEditing] = useState(false);

 
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
   
    dispatch(addDescription({
      data:`${value}`,
      columnId,
      taskId
      
    }))
    setValue("")
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

