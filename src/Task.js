import DeleteIcon from '@mui/icons-material/Delete';
import TaskIcon from '@mui/icons-material/Task';
import UndoIcon from '@mui/icons-material/Undo';
const Task = ({task, onClick, changeStatus}) => {

    const colorSwitch = (priority) => {
        switch(priority){
            case 'High':
                return "#ED0800";
            
            
            case "Medium":
                return  "#A4DBE8";
            
            
            default :
            return "#3DCAB5"
        }
            
    }

    
return (
        
            ( <div className='task' style={{backgroundColor : colorSwitch(task.priority)}}>
                    <div className='taskText'><h3>{task.text}</h3><p>{task.time}</p></div> 
                    <div className='icons'><DeleteIcon fontSize="small" onClick={()=>onClick(task.id)}/>
                    { task.status ? (<TaskIcon fontSize='small' onClick={()=>changeStatus(task.id)}/>):
                    (<UndoIcon fontSize='small' onClick={()=>changeStatus(task.id)}/>)}</div>
                    
                </div>
            )
        )
}

export default Task
