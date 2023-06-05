import { useState, useEffect } from "react"
import { useUpdateTaskMutation, useDeleteTaskMutation } from "./tasksApiSlice"
import { Link, redirect, useNavigate } from "react-router-dom"
import { Bckg } from "../../../../styles/BckgStyle"
import { Container } from "../../../../styles/EditTaskStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlag, faHouse  } from '@fortawesome/free-solid-svg-icons'
import { faCheck  } from '@fortawesome/free-solid-svg-icons'

import { StandBtn } from "../../../../styles/StandardBtn"
import { Icon } from "../../../../styles/BigTaskStyle"

// import useAuth from "../../hooks/useAuth"

const EditTaskForm = ({ task, users }) => {
    console.log(task.subtasks)
    
   
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
    const [flag, setFlag] = useState(task.flag)
console.log(subtasks)
    useEffect(() => {

        if (isSuccess || isDelSuccess) {
            setTitle('')
            setContent('')
            setUserId('')
            setFlag('')
            setSubtasks([{name:"", completedCheck:false}])
            navigate('/dash/tasks')
            
        }

    }, [isSuccess, isDelSuccess, navigate])

    const updateSubtask = (index, updatedSubtask) => {
        setSubtasks(prevSubtasks => {
          const newSubtasks = [...prevSubtasks];
          newSubtasks[index] = updatedSubtask;
          return newSubtasks;
        });
      };

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onCompletedChanged = e => setCompleted(
        completed === "todo" ? "doing" : completed === "doing" ? "done" : "todo"
    )
    const onUserIdChanged = e => setUserId(e.target.value)
    const onSubtasksChanged = (e, i) => {
        const {name, value} = e.target
        const subList = {...subtasks[i], [name]: value}
        
        updateSubtask(i, subList)
        }



        const handleSubtaskClick = (i) => {
          const newSubtasks = [...subtasks];
          newSubtasks[i] = {
            ...newSubtasks[i],
            completedCheck: !newSubtasks[i].completedCheck
          };
          setSubtasks(newSubtasks);
        
         
        };
        const onChangeFlag = () => {
            if (flag === 'High') {
              setFlag('Low');
            } else if (flag === 'Low') {
              setFlag('Medium');
            } else if (flag === 'Medium') {
              setFlag('High');
            }
          };

    const canSave = [title, content, userId].every(Boolean) && !isLoading

    const onSaveTaskClicked = async () => {
        if (canSave) {
            await updateTask({ id: task.id, user: userId, title, content, completed, subtasks, flag })
            
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
console.log(subtasks)
    

let flagColor = flag === "Medium" ? "orange" : flag === "High" ? "red" : flag === "Low" ? "white" : null
    const contents = (
        <>
        <Bckg >
        
        <Container>
           <Icon>
            <Link to="/dash/tasks"><FontAwesomeIcon icon={faHouse} size="2xl"  /></Link>
           </Icon>
        <form onSubmit={e => e.preventDefault()}>
            <div className="wrapper">
            
            <div className="info-box">
            
           
                <div className="completed">
                    <div onClick={onCompletedChanged} className="com">{completed}</div>
                    <FontAwesomeIcon icon={faFlag} style={{color: flagColor,}} onClick={onChangeFlag} size="lg" />
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
              <StandBtn onClick={onDeleteTaskClicked}>Delete Task</StandBtn>
              
             
            </div>
           
            <div className="content-box">
            <div>{
              
              Object.values(subtasks).map((item, i) => {
                
                
                return (
                    <>
                    
                    
                    <div className="inputs-wrapper sub">
                    <div className="input-box inp">
              <input
                type="text"
                name="sub"
                className="title"
                value={subtasks[i].name}
                onChange={e=>onSubtasksChanged(e,i)}
                placeholder={item.name}
                
              />
              <span>Subtask {i + 1}</span>
              
              
              </div>
              <input
             type="checkbox"
             checked={subtasks[i].completedCheck}
             onChange={() => handleSubtaskClick(i)}
           />
              </div>
              
                    </>
                )
              })
              }</div>
              
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