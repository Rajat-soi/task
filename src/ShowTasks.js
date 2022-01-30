import Task from "./Task";




const ShowTasks = ({tasks, onDelete, onToggle}) => {
    return (
        <div  className='showTask' >
            <h1>Task to be Complete</h1>
           <div className='card'> {tasks.map((task, index) => 
            task.status ? ( <Task key={index} task={task} onClick={onDelete} changeStatus={onToggle} /> ):'' )} </div>
        </div>
    )
}

export default ShowTasks
