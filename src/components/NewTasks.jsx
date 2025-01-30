import { useState } from "react";
import Button from "./Button.jsx";

export default function NewTasks({onAddTask}){
      const [enterdValue, setEnterdValue]=useState('');

      function handleChange(event){
        setEnterdValue(event.target.value);
      }

      function handleClick(){
        setEnterdValue('');
        onAddTask(enterdValue);
      }

    return (
        <div className="flex items-center gap-4 my-4">
            <input value={enterdValue} onChange={handleChange} className="w-64 p-2 bg-stone-200 rounded-sm"  type="text" />
            <Button onClick={handleClick}>Add New Tasks</Button>
        </div>
    )
}