import React, {useState, useEffect} from 'react';
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
   
    task.status = status
    const res = await fetch('http://localhost:3002/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    settasks([...tasks, data])
    
  
  
  
}
//Fetch task
useEffect(() => {
  const getTasks = async () => {
    const taskfromServer = await fetchTasks()
    settasks(taskfromServer)
  
  }
    getTasks();
}, [])

const fetchTasks = async() =>{
  const res = await fetch('http://localhost:3002/tasks')
  const data = await res.json()
  return data
}

const fetchTask = async(id) =>{
 const res = await fetch(`http://localhost:3002/tasks/${id}`)
 const data = await res.json()
  return data
}


//delete Task
const deleteTask = async(id) =>{
 await fetch(`http://localhost:3002/tasks/${id}`,{ method: 'DELETE',})
settasks(tasks.filter((task)=> task.id !== id ))
}


// toggle task status
const toggleStatus = async (id)=>{
  const taskToToggle = await fetchTask(id)
  const update = {...taskToToggle, status: !taskToToggle.status}
  const res = await fetch(`http://localhost:3002/tasks/${id}`, 
  {method :'PUT', headers:{'content-type': 'application/json',},body: JSON.stringify(update), })
  const data = await res.json()
  settasks(tasks.map((task)=> task.id === id ? {...task, status : data.status} : task))}

  

  

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
