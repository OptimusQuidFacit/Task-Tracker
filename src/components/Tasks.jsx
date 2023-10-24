import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import CloseIcon from '@mui/icons-material/Close'
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import Loader from './Loader';

const Wrapper = styled.div`
background-color:white;
border-radius: 10px;
padding:10px;
border:2px solid teal;
width: 100%;`

const Taskitem= styled.div`
    margin-top: 10px;
    border-top: 3px solid ${props=>props.border};
    cursor: pointer;
`
const ItemRow=styled.div`
padding: 10px;
display:flex;
justify-content:space-between;
align-items:center;
`
const Name=styled.div`
flex:1;
font-weight:bold;`

const Checkbox=styled.input`
`
const Checkcontainer= styled.div`
flex:1;`

const Tasks = ({tasks, onToggleReminder, onHandleCheck, onDelete}) => {
const [isLoading, setIsLoading]= useState(true);

useEffect(
  ()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 2000)
  }, []
)
    
  return (
    <Wrapper>
         {isLoading?
          <Loader/>: tasks.map(task=>
            <Taskitem key={task.id} border={task.completed?"green":"red"}>
                <ItemRow><Name>{task.Name}</Name> <CloseIcon onClick={()=>{onDelete(task.id)}}/> </ItemRow>
                <ItemRow ><Name>{task.Deadline}</Name> <Checkcontainer  onChange={()=>onHandleCheck(task.id)}>Completed <Checkbox  type="checkbox" checked={task.completed}/></Checkcontainer> {!task.Reminder?<NotificationsOffIcon onClick={()=>{onToggleReminder(task.id)}}/> :<NotificationsActiveIcon onClick={()=>{onToggleReminder(task.id)}}/> 
                
                }</ItemRow>
</Taskitem>
        )
         }
    </Wrapper>
  )
}

export default Tasks