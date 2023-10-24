import styled from "styled-components";
import Header from "./components/Header";
import AddNew from './components/AddNew.jsx';
import Tasks from "./components/Tasks";
import React, { useState, useEffect } from 'react'
import axios from 'axios';


const Container= styled.div`
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
height:100vh;
width:80vw;
max-width: 800px;
margin:auto
`;
function App() {
  const [tasks, setTasks]= useState([
    /* {
       id:"1",
       Name: "Read 100 pages of Purple Hibiscus",
       Deadline: "Friday at 9pm",
       completed:false,
       Reminder: true
    },
    {
        id:"2",
        Name: "Wash all my dirty clothes",
        Deadline: "Thurday at 3pm",
        completed:false,
        Reminder: true
     },

     {
        id:"3",
        Name: "Complete Dr Okonkwo's assignment",
        Deadline: "Wednesday at 5pm",
        completed:true,
        Reminder: true
        
     } */

]);
const handleCheck= ( taskId)=>{
setTasks(tasks.map(task=> task.id===taskId ? {...task, completed: !task.completed}: task)) 

}
const onDelete=(taskId)=>{
    setTasks(tasks.filter(task=>task.id!==taskId))
    axios.delete(`http://localhost:5000/tasks/delete?id=${taskId}`
    )
}

const toggleReminder=(taskId)=>{
setTasks(tasks.map(task=> task.id===taskId ? {...task, Reminder: !task.Reminder}: task))

};

const onAddTask=(task)=>{
  setTasks ([ ...tasks, task]);
  axios.post("http://localhost:5000/tasks/addnew", 
    task)
    .then(res=>{
      console.log(res)
    })
    .catch((err)=>{console.log(err)});
}


 useEffect(()=>{
    axios.get("http://localhost:5000/tasks/getasks", 
    )
    .then(async (res)=>{
      setTasks ([ ...res.data]);
      
    })
  }, []);
  useEffect(()=>{
    axios.post("http://localhost:5000/tasks/updateall",
    tasks
    ).then(res=>console.log(res.data));
  }, [tasks]); 

 

  return (
    <Container>
<Header name="Kemmy"/>
<AddNew addTask={onAddTask} color="green"/>
<Tasks tasks= {tasks} onToggleReminder={toggleReminder} onHandleCheck={handleCheck} onDelete={onDelete}/>
   </Container>
  
  );
}

export default App;
