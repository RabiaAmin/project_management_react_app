import React, { useRef } from 'react'
import { Input } from './Input.jsx'
import Modal from './modal.jsx';

export default function AddNewProject({onAdd,onCancle}) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if(enteredTitle.trim() === ''|| enteredDescription.trim() === ''|| enteredDueDate.trim() === ''){
     modal.current.open();
     return;
    }

    onAdd({title : enteredTitle,description : enteredDescription,dueDate:enteredDueDate});
  }
  

  return (
    <>
     <Modal ref={modal}>
        <h1 className='font-bold mb-2 text-stone-800'>Invalid Input</h1>
        <p>Ooops! ..... looks like you forgot to enter a value.</p>
        <p>make sure you fill all the fields</p>
      </Modal>
    <div  className=' mt-16'>
        <menu className='flex items-center justify-end gap-4'>
            <li><button onClick={onCancle} className='text-stone-800 hover:text-stone-950'>
             Cancle
            </button></li>
            <li><button onClick={handleSave} className='bg-stone-800 py-2 px-6 rounded text-stone-50 hover:bg-stone-950'>
             Save
            </button></li> 
        </menu>
        <div>
            <Input type="text" ref={title} label="Title"/>
            <Input ref={description}  label="Description" textArea />
            <Input type="date"  ref={dueDate} label="Due Date"/>

        </div>
    </div>
    </>
  )
}
