import React from 'react'
import { useGetTasksQuery } from './tasksApiSlice'
import { useGetUsersQuery } from '../users/usersApiSlice'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from "react"


import { Bckg } from "../../../../styles/BckgStyle"
import { Container, Icon } from "../../../../styles/BigTaskStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlag, faHouse, faPenToSquare  } from '@fortawesome/free-solid-svg-icons'
import { faCheck  } from '@fortawesome/free-solid-svg-icons'

const BigTask = ({task, users}) => {
  



  // const completedTasks = Object.values(task?.subtasks).filter(task => task.completed)

   
  return (
    <>
    <Bckg >
    <Icon>
    <Link to="/tasks"><FontAwesomeIcon icon={faHouse} size="2xl"  /></Link>
    </Icon>
    <Container>
    
    
        <div className="wrapper">
        
        <div className="info-box">
        
       
            <div className="completed">
                {task.completed}
                <div className='icons-box'>
                <FontAwesomeIcon icon={faFlag} size="lg" />
                <Link to='edit'> <FontAwesomeIcon icon={faPenToSquare} size="lg"/></Link>
                </div>
            </div>
        <div className="input-box">
         <div className='title'>{task.title}</div>
          <span>Title</span>
          
          </div>

          <div className="input-box">
          <div className='title'>{task.content}</div>
          <span>Content</span>
          
          </div>
          
      
          <button className="neon-button">Delete Task</button>
          
         
        </div>
       
        <div className="content-box">
          <h2>Subtasks</h2>
        <div>{
          
          Object.values(task.subtasks).map((item, i) => {
            
            
            return (
                <>
                
                
                <div className="inputs-wrapper sub">
                <div className="input-box inp">
                <div className='title'>{item.name}</div>
          <span>Subtask {i + 1}</span>
          
          
          </div>
          {item.completed ? null : <FontAwesomeIcon icon={faCheck} size="lg" />}
          </div>
          
                </>
            )
          })
          }</div>
          {/* <h3>Subtasks completed: {completedTasks.length}</h3> */}
        </div>
        
        </div>
        
        
        </Container>
        </Bckg>
    </>
)


}

export default BigTask