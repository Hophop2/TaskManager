import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetTasksQuery } from './tasksApiSlice'
import { Container } from '../../../../styles/TaskStyle'

const Task = ({taskId}) => {

    const { task } = useGetTasksQuery("TasksList", {
        selectFromResult: ({ data }) => ({
            task: data?.entities[taskId]
        }),
    })
    const navigate = useNavigate()

    if(task) {
        const created = new Date(task.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const updated = new Date(task.updatedAt).toLocaleString('en-US', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/tasks/${taskId}`)
        return (
            <>
                <Container onClick={handleEdit}>
                    <h3>{task.title}</h3>
                    {/* <div>{task.content}</div> */}
                    <div>{task.username}</div>
                    <div>{task.subtasks?.map((item) =>{
                        <>
                        <div>{item.name}</div>
                        <div>{item.completedCheck}</div>
                        </>
                    })}</div>
                    
                </Container>
            </>
          )
    } else return null
  
}

export default Task