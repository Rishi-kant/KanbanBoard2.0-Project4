import React from 'react'
import './modal.css'

function Modal(props) {
   
  return (
    <div className='container' onClick={()=>(props.onClose())}>
    <div className='container_content'   onClick={(event)=>event.stopPropagation()}>
    {props.children}
    </div>

    </div>
  )
}

export default Modal;