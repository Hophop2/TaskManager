import { useState, useEffect } from "react"
import { useUpdateTaskMutation, useDeleteTaskMutation } from "./tasksApiSlice"
import { Link, useNavigate } from "react-router-dom"
import { Bckg } from "../../../../styles/BckgStyle"
import { Container } from "../../../../styles/EditTaskStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlag, faHouse  } from '@fortawesome/free-solid-svg-icons'
import { faCheck  } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { StandBtn } from "../../../../styles/StandardBtn"
import { Icon } from "../../../../styles/BigTaskStyle"

// import useAuth from "../../hooks/useAuth"

const EditTaskForm = ({ task, users }) => {
    console.log(task.subtasks)
    const completedTasks = Object.values(task.subtasks).filter(task => task.completed)
   
    // const { isManager, isAdmin } = useAuth()

    const [updateTask, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateTaskMutation()

    const [deleteTask, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteTaskMutation()

    const navigate = useNavigate()

    const [title, setTitle] = useState(task.title)
    const [content, setContent] = useState(task.content)
    const [completed, setCompleted] = useState(task.completed)
    const [userId, setUserId] = useState(task.user)
    const [subtasks, setSubtasks] = useState(task.subtasks)
console.log(subtasks)
    useEffect(() => {

        if (isSuccess || isDelSuccess) {
            setTitle('')
            setContent('')
            setUserId('')
            setSubtasks([{name:"", completedCheck:false}])
            
        }

    }, [isSuccess, isDelSuccess,])

    const updateSubtask = (index, updatedSubtask) => {
        setSubtasks(prevSubtasks => {
          const newSubtasks = [...prevSubtasks];
          newSubtasks[index] = updatedSubtask;
          return newSubtasks;
        });
      };

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onCompletedChanged = e => setCompleted(prev => !prev)
    const onUserIdChanged = e => setUserId(e.target.value)
    const onSubtasksChanged = (e, i) => {
        const {name, value} = e.target
        const subList = {...subtasks[i], [name]: value}
        
        updateSubtask(i, subList)
        }

    const canSave = [title, content, userId].every(Boolean) && !isLoading

    const onSaveTaskClicked = async (e) => {
        if (canSave) {
            await updateTask({ id: task.id, user: userId, title, content, completed, })
            
        }
    }

    const onDeleteTaskClicked = async () => {
        await deleteTask({ id: task.id })
    }

    
    const options = users.map(user => {
        return (
            <option
                key={user.id}
                value={user.id}

            > {user.username}</option >
        )
    })

    // const errClass = (isError || isDelError) ? "errmsg" : "offscreen"
    // const validTitleClass = !title ? "form__input--incomplete" : ''
    // const validContentClass = !content ? "form__input--incomplete" : ''

    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''


    let deleteButton = null
    // if (isManager || isAdmin) {
    //     deleteButton = (
    //         <button
    //             className="icon-button"
    //             title="Delete"
    //             onClick={onDeleteTaskClicked}
    //         >
    //             <FontAwesomeIcon icon={faTrashCan} />
    //         </button>
    //     )
    // }
console.log(Object.values(task.subtasks).map((item) => {
    console.log(item.name)
    
    
}))
    const contents = (
        <>
        <Bckg >
        
        <Container>
           <Icon>
            <Link to="/tasks"><FontAwesomeIcon icon={faHouse} size="2xl"  /></Link>
           </Icon>
        <form onSubmit={e => e.preventDefault()}>
            <div className="wrapper">
            
            <div className="info-box">
            
           
                <div className="completed">
                    {task.completed}
                    <FontAwesomeIcon icon={faFlag} size="lg" />
                </div>
            <div className="input-box">
              <input
                type="text"
                name="title"
                className="title"
                value={title}
                onChange={onTitleChanged}
                placeholder={task.title}
                
              />
              <span>Title</span>
              
              </div>

              <div className="input-box">
              <textarea
              rows={10}
              cols={45}
                type="text"
                name="content"
                className="content"
                value={content}
                onChange={onContentChanged}
                placeholder={task.content}
                
              />
              <span>Content</span>
              
              </div>
              
          
              <StandBtn onClick={onSaveTaskClicked}>Update Task</StandBtn>
              
             
            </div>
           
            <div className="content-box">
            <div>{
              
              Object.values(task.subtasks).map((item, i) => {
                
                
                return (
                    <>
                    
                    
                    <div className="inputs-wrapper sub">
                    <div className="input-box inp">
              <input
                type="text"
                name="name"
                className="title"
                value={subtasks[i].name}
                onChange={e=>onSubtasksChanged(e,i)}
                placeholder={item.name}
                
              />
              <span>Subtask {i + 1}</span>
              
              
              </div>
              {item.completed ? null : <FontAwesomeIcon icon={faCheck} size="lg" />}
              </div>
              
                    </>
                )
              })
              }</div>
              <h3>Subtasks completed: {completedTasks.length}</h3>
            </div>
            
            </div>
            </form>
            
            </Container>
            </Bckg>
        </>
    )

    return contents
}

export default EditTaskForm