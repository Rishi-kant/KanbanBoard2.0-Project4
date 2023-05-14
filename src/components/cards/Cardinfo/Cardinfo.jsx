
import React, { useState } from 'react'

import './cardinfo.css';
import {BsCreditCard} from 'react-icons/bs'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import EditableText from '../../Editabletext/Editabletext'
import Modal from '../../Modal/Modal'
import {RxCross2} from 'react-icons/rx'

function Cardinfo(props) {
    
  const[showList , setShowList] = useState(false)

  return (
   
    <Modal onClose={()=> props.onClose()}  >
     {/* <RxCross2 className='cross-icon'onClick={onClose} /> */}
    <div className='cardinfo-container' >
     
        <div className='cardinfo-box'>
            <div className='cardinfo-box_title'>
              <BsCreditCard className='icon-title'/>
            Title 1 </div>
            <div className='title-input'>
            <input  placeholder='Enter your title'/>
            </div>
        </div>
{/* box for description*/}

        <div className='cardinfo-box'>
            <div className='cardinfo-box_title'>
              <AiOutlineMenuUnfold  className='icon-title'/>
              Description    </div>
            <div className='title-input'>
            <EditableText/> 
            </div>
        </div>

{/* box for activity */}

       <div className='cardinfo-box'>
            <div className='cardinfo-box_title'>
              <AiOutlineMenuUnfold  className='icon-title'/>
              Activity </div>
              <button onClick={()=> setShowList(!showList)} className='hide-btn'>{showList ? "showList" : " HideList"}</button>
            <ul style={{display: showList? " none" : " block"}}>
                <li>The task was created at 5PM, 11th May, 2023</li>
                <li>Task was moved from To Do list to In Progress List</li>
            </ul>
        </div>

    </div> 
</Modal>
  )
}

export default Cardinfo