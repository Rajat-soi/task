import React, {useState} from 'react';
import AddTask from './AddTask';
import Header from './Header';
import { Grid } from '@material-ui/core';
import ShowTasks from './ShowTasks.js';
import CompletedTask from './CompletedTask';




const App = () => {
 const [tasks, settasks] = useState([])
 const status = true
 
 
  // Add Task
  const addTask = async (task) => {
   
    task.status = status;
    task.id= tasks.length +1;
    settasks([...tasks, task]);
    
   
  
}


//delete Task
const deleteTask = (id) =>{
settasks(tasks.filter((task)=> task.id !== id ))
}


// toggle task status
const toggleStatus =(id)=>{
  settasks(tasks.map((task)=> task.id === id ? {...task, status : !task.status} : task))}

  

  

  return (
    <div className="container">
      <Header />
      <Grid container spacing= {1}>
        <Grid item xs={12}  sm={6} md={4} lg={4} ><AddTask onAdd={addTask}/></Grid>
        <Grid item xs={12} sm={6} md={8} lg={8}>< ShowTasks  tasks={tasks}
         onDelete={deleteTask} onToggle={toggleStatus} /></Grid>
        <Grid item xs={12}><CompletedTask tasks={tasks}
         onDelete={deleteTask} onToggle={toggleStatus}/></Grid>
      </Grid>
      
    
  
    </div>
  )
}

export default App
