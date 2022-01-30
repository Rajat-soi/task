import React from 'react';
import { Chip } from '@material-ui/core';
import {useState} from 'react';


const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [time, settime] = useState('');
    const [priority, setpriority] = useState('High');

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('Please Add Text')
            return
        }


        onAdd({text, time, priority})
        setText('')
        settime('')
        setpriority('')

    }

   

    return (
        <form  className="addTaskForm" onSubmit={onSubmit}>
            <h1>Enter task here</h1>
            <div className="taskInput"><label>Task</label>
            <input type="text" value={text} placeholder="enter text here" onChange={(e)=> setText(e.target.value)}/></div>
            <div className="taskInput"><label>Time</label>
            <input type="date"  value={time} onChange={(e)=> settime(e.target.value)} /></div>
            <div className="priority"><label>Priority</label>
            <div className='chips'>
            <Chip label="High" color="primary" size="small" variant="outlined" onClick={(e)=> setpriority('High')}></Chip>
            <Chip label="Medium" color="primary" size="small" variant="outlined" onClick={(e)=> setpriority('Medium')}></Chip>
            <Chip label="Low" color="primary" size="small" variant="outlined"  onClick={(e)=> setpriority('Low')}></Chip>
            </div>  </div> 
            <button class="cssbuttons-io-button"> Save Task
            <div class="icon">
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                </div>
            </button>   
            
        </form>
    
    )
}

export default AddTask
