import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';


const Wrapper = styled.div`
  width:100%;
  text-align:center;
  background:${props=>props.background};
  padding: 20px 10px;
  margin-bottom: 20px
`
const Addbutton= styled.button`
margin-top: ${props=>props.yspacing};
padding: 5px 10px;
border-radius: 5px;
background-color:${props=>props.background};
cursor:pointer;
font-weight:bold;
`
const Addform= styled.div`
width:100%;
display:flex;
justify-content: space-between;
align-items: center;
`
const Inputfield= styled.input`
width:100%;
margin-top:10px;
display:block;
height:25px;
`
const InputContainer= styled.div`
margin-right:10px;
flex:1;
`


const AddNew = ({color, addTask}) => {

  const [show, setShow]= useState(false);
  const [formData, setFormData]= useState({
    id:uuidv4(),
    Name:"",
    Completed: false,
    Reminder: false,
  })
  const toggleForm=()=>{
    setShow(!show);

}
  return (
   <Wrapper background={show&&"lightgrey"}>
   {show && <Addform className='add-form'>
    <InputContainer>
   <Inputfield onChange={(e)=>{
    setFormData({...formData, Name:e.target.value })
   }} type='text' placeholder='Task Name'/>
   <Inputfield onChange={(e)=>{
    setFormData({...formData, Deadline:e.target.value })
   }} type='text' placeholder='Deadline'/>
   </InputContainer>
   <span>
    <b>Set Reminder </b><Inputfield onChange={(e)=>{
    setFormData({...formData, Reminder:e.target.checked })
   }} type='checkbox'/>
   </span>
    </Addform>}
    <Addbutton onClick={()=>{
    toggleForm();
    show && addTask(formData);
    }} background={color} yspacing={show && "20px"}>
        {show?'Save Task':'Add Task'}
    </Addbutton>
    </Wrapper> 
  )
}

export default AddNew