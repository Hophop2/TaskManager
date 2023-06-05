import React from 'react'
import { useGetTasksQuery, useUpdateTaskMutation } from './tasksApiSlice'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from "react"


import { Bckg } from "../../../../styles/BckgStyle"
import { Container, Icon } from "../../../../styles/BigTaskStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlag, faHouse, faPenToSquare, faSleigh  } from '@fortawesome/free-solid-svg-icons'
import { faCheck  } from '@fortawesome/free-solid-svg-icons'

const BigTask = ({task}) => {


 



  const [updateTask, {
    isLoading,
    isSuccess,
    isError,
    error
}] = useUpdateTaskMutation()
const navigate = useNavigate()

  const [subtasks, setSubtasks] = useState(task.subtasks)
  const [userId, setUserId] = useState(task.user)


  useEffect(() => {
    onSaveTaskClicked();
  }, [subtasks]);
  let flagColor = task.flag === "Medium" ? "orange" : task.flag === "High" ? "red" : task.flag === "Low" ? "white" : null




const handleSubtaskClick = (i) => {
  const newSubtasks = [...subtasks];
  newSubtasks[i] = {
    ...newSubtasks[i],
    completedCheck: !newSubtasks[i].completedCheck
  };
  setSubtasks(newSubtasks);
  onSaveTaskClicked()
 
};
  const onSaveTaskClicked = async () => {
    
        await updateTask({ id: task.id, user: userId, flag: task.flag, subtasks, title: task.title, content: task.content, completed: task.completed})
        
    
}


const isCompleted = () =>{
  const falseValues = task.subtasks.filter(values => values.completedCheck === true) 

  return falseValues.length
} 
  // const completedTasks = Object.values(task?.subtasks).filter(task => task.completed)
console.log(task.subtasks.map((item) => item.completedCheck))
   console.log(subtasks)
  return (
    <>
    <Bckg >
    <Icon>
    <Link to="/dash/tasks"><FontAwesomeIcon icon={faHouse} size="2xl"  /></Link>
    </Icon>
    <Container>
    
    
        <div className="wrapper">
        
        <div className="info-box">
        
       
            <div className="completed">
                {task.completed}
                <div className='icons-box'>
                <FontAwesomeIcon icon={faFlag} style={{color: flagColor,}} size="lg" />
                <Link to='edit'> <FontAwesomeIcon icon={faPenToSquare} size="lg"/></Link>
                </div>
            </div>
        <div className="input-box">
         <div className='title'>{task.title}</div>
          <span>Title</span>
          
          </div>

          <div className="input-box">
          <div className='content'>{task.content}</div>
          <span>Content</span>
          
          </div>
          
      
         
          
         
        </div>
       
        <div className="content-box">
          <h2>Subtasks</h2>
        <div>{
          
          Object.values(subtasks).map((item, i) => {
            
            
            return (
                <>
                
                
                <div className="inputs-wrapper sub">
                <div className="input-box inp">
                <div className='title' style={{ textDecoration: item.completedCheck ? 'line-through' : 'none'}}>{item.name}</div>
          <span>Subtask {i + 1}</span>
          {/* <FontAwesomeIcon onClick={() => handleSubtaskClick(i)}  icon={faCheck} size="lg"> */}
          
          </div>
          {item.completedCheck ? null :
             <input
             type="checkbox"
             checked={item.completedCheck}
             onChange={() => handleSubtaskClick(i)}
           />
              }
          </div>
          
                </>
            )
          })
          }</div>
          <h3>Subtasks completed: {isCompleted()}</h3>
        </div>
        
        </div>
        
        
        </Container>
        </Bckg>
    </>
)


}

export default BigTask