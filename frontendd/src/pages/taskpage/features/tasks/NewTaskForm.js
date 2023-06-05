import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAddNewTaskMutation } from "./tasksApiSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Bckg } from "../../../../styles/BckgStyle"
import { Container } from "../../../../styles/NewTaskFormStyle"
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons"
import { importance } from "../../../../config/colors"


const NewTaskForm = ({users}) => {
  const colors = ["High", "Medium", "Low"]
    const [addNewTask, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewTaskMutation()

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [completed, setCompleted] = useState('')
    const [userId, setUserId] = useState(users[0].id)
    const [subtasks, setSubtasks] = useState([{name:"", completedCheck:false}])
    const [flag, setFlag] = useState(colors[0].id)
    
   
    useEffect(() => {
        if (isSuccess) {
            setTitle('')
            setContent('')
            setFlag('')
            setCompleted('')
            setUserId('')
            setSubtasks('')
            navigate('/tasks')
        }
    }, [isSuccess, navigate])

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onUserIdChanged = e => setUserId(e.target.value)
    const onFlagChanged = e => setFlag(e.target.value)
    const onCompletedChanged = e => setCompleted(e.target.value)
    const onSubtasksChanged = (e, i) => {
      const {name, value} = e.target
      const subList = [...subtasks]
      subList[i][name] = value
      setSubtasks(subList)
      }

      const addRow = () => {
     
        setSubtasks([...subtasks, {name:'', completedCheck:false}])
      }
      const onRemove=(i) => {
        
        const newForm = [...subtasks]
        newForm.splice(i, 1)
        setSubtasks(newForm)
      }

console.log(completed)
    const canSave = [title, content, userId, completed, flag].every(Boolean) && !isLoading

    const onSaveTaskClicked = async (e) => {
        e.preventDefault()
        if (canSave) {
            await addNewTask({user: userId, title, content, completed, subtasks, flag})
        }
    }

    const options = users.map(user => {
        return (
            <option
                key={user.id}
                value={user.id}
            > {user.username}</option >
        )
    })
    const optionsFlag = colors.map(color => {
      return (
          <option
              key={color.id}
              value={color.id}
          > {color}</option >
      )
  })



    const contentBlock = (
        <>
        
            {/* <p className={errClass}>{error?.data?.message}</p>*/

    
        <Bckg>
            <Container>
            <div className="box">
        <div className="wrapper">
          <div className="content-box">
            <h1>Create a task</h1>
            
          </div>

          <form onSubmit={onSaveTaskClicked}>
            <div className="input-box">
              <input
                type="text"
                name="title"
                value={title}
                onChange={onTitleChanged}
                required
              />
              <span>Title</span>
            </div>

            <div className="input-box">
              <input
                type="text"
                name="content"
                value={content}
                onChange={onContentChanged}
                required
              />
              <span>Content</span>
            </div>
            <div className="input-box">
              <input
                type="text"
                name="completed"
                value={completed}
                onChange={onCompletedChanged}
                required
              />
              <span>Completed</span>
            </div>
            
            {subtasks.map((item, i) =>{
              
              return(
                <div>
                <div className="inputs-wrapper" >
                <div className="input-box"
                >
                <input
                  type="text"
                  name="name"
                  
                  onChange={e=>onSubtasksChanged(e,i)}
                  required
                />
                <span>Subtasks</span>
              </div>
               
              <div className="btn-box">
              {
                  subtasks.length!==1 &&
                  <button   className="add" onClick={() =>onRemove(i)}><FontAwesomeIcon icon={faXmark} /></button>
               }
               { subtasks.length-1===i &&
               <button className="add" onClick={addRow} ><FontAwesomeIcon icon={faPlus} /></button> 
               }
               </div>
              
              
              </div>
              
              
              
              </div>
              )
            })}
            
           
            <label className="form__label form__checkbox-container" htmlFor="username">
                    ASSIGNED TO:</label>
                <select
                    id="username"
                    name="username"
                    className="form__select"
                    value={userId}
                    onChange={onUserIdChanged}
                >
                    {options}
                </select>
                <br />
                <label>
                    Important:</label>
                <select
                    id="flag"
                    name="flag"
                    className="form__select"
                    value={flag}
                    onChange={onFlagChanged}
                >
                    {optionsFlag}
                </select>
                <br />

            <button className="neon-button">Create</button>
          </form>
         
        </div>
      </div>

            </Container>
        </Bckg>
      
  
                
             }
        </>
    )

    return contentBlock
}

export default NewTaskForm