import Task from './Task'

const CompletedTask = ({tasks, onDelete, onToggle}) => {
    return (
        <div className='complete' ><h1>CompletedTask</h1>
           <div className='card1'> {tasks.map((task, index) => 
            task.status ? (''): 
            ( <Task key={index} task={task} onClick={onDelete} changeStatus={onToggle} /> ))} 
            </div>
        </div>
    )
}

export default CompletedTask
