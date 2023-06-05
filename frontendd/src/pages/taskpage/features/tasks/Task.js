import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetTasksQuery } from './tasksApiSlice'
import { Container } from '../../../../styles/TaskStyle'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Task = ({taskId}) => {

    const { task } = useGetTasksQuery("TasksList", {
        selectFromResult: ({ data }) => ({
            task: data?.entities[taskId]
        }),
    })
    const navigate = useNavigate()

    if(task) {
       let flagColor = task.flag === "Medium" ? "orange" : task.flag === "High" ? "red" : task.flag === "Low" ? "white" : null

        const handleEdit = () => navigate(`/dash/tasks/${taskId}`)
        return (
            <>
                <Container onClick={handleEdit}>
                    <h3>{task.title}</h3>
                    {/* <div>{task.content}</div> */}
                    <div className='up-wrapper'>
                    <FontAwesomeIcon icon={faFlag} style={{color: flagColor,}} size="lg" />
                    {task.username}
                    </div>
                 
                    
                </Container>
            </>
          )
    } else return null
  
}

export default Task