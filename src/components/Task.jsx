import NewTasks from "./NewTasks";

export default function Task({onAddTask,onDeleteTask,tasks}){

    
    return (
        <section>
            <h2 className='text-3xl font-bold text-stone-600 mb-2'>Task</h2>
            <NewTasks onAddTask={onAddTask}  />
             {
                 tasks.length === 0 && (
                    <p className="text-stone-800 mb-4">This project doesn't have any task yet.</p>)
             }

             {
                tasks.length > 0 && (
                    <ul className="p-4 mt-8 rounded-md bg-stone-100">
                       {tasks.map((val)=><li key={val.id} className="flex justify-between mb-6">
                        <span>{val.text}</span>
                        <button onClick={()=>{onDeleteTask(val.id)}} className="text-stone-700 hover:text-red-500 hover:font-bold"> 
                            Cancel
                        </button>
                        </li>)}
                    </ul>
                )
             }
        </section>
    )
}