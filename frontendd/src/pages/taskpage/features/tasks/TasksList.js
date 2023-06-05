import { useGetTasksQuery } from "./tasksApiSlice"
import Task from "./Task"
import { Container, TaskContainer } from "../../TaskPageStyle"
import Nav from "../../components/Nav"
import { Bckg } from "../../../../styles/BckgStyle"
import Loader from "../../../../components/Loader"
import { useState } from "react"



const TasksList = () => {
    const [sortMethod, setSortMethod] = useState("default");
    const [flagStatus, setFlagStatus] = useState("");
    const {
        data: tasks,
        isLoading,
        isSuccess,
        isError,
        refetch,
        error
    } = useGetTasksQuery(undefined, {
        pollingInterval: 5000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    

console.log(tasks)
    let content

    if(isLoading)  content = <Loader />

    if(isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if(isSuccess) {
        const {ids, entities} = tasks
        const renderTask = ids.map((taskId) => entities[taskId])


        const renderTasks = (status) => {
            return ids?.length
              ? renderTask
                  .filter((task) => task.completed === status)
                  .map((task) => <Task nb={task.length > 5 && "scroll"}  key={task.id} taskId={task.id} />)
              : null;
          };
          
          const todoContent = renderTasks("todo");
          const doingContent = renderTasks("doing");
          const doneContent = renderTasks("done");

     
          
 
          const sortedTasks = renderTask
          .sort((a, b) => a.title.localeCompare(b.title));
        
        const renderSortedTasks = (status) => {
          return sortedTasks
            .filter((task) => task.completed === status)
            .map((task) => <Task key={task.id} nb={task.length > 5 && "scroll"} taskId={task.id} />);
        };
        
        const todoContentSort = renderSortedTasks("todo");
        const doingContentSort = renderSortedTasks("doing");
        const doneContentSort = renderSortedTasks("done");

        const renderSortedTasksByHighFlag = (status, sortMethod) => {
          const flagValues = { High: 3, Medium: 2, Low: 1 }; // mapowanie wartości flagi na liczby
          const sortedTasks = renderTask
            .filter((task) => task.completed === status)
            .sort((a, b) => {
              if (sortMethod === "high") {
               
                // sortowanie po wartości flagi
                return flagValues[b.flag] - flagValues[a.flag] || a.title.localeCompare(b.title);
              } else if (sortMethod === "low") {
               
                // sortowanie po wartości flagi
                return flagValues[a.flag] - flagValues[b.flag] || a.title.localeCompare(b.title);
              }
              return a.title.localeCompare(b.title);
            });
          
            return sortedTasks.map((task) => (
              <Task key={task.id} nb={task.length > 5 && "scroll"} taskId={task.id} />
            ));
          };

          const todoContentSortByHigh = renderSortedTasksByHighFlag("todo", sortMethod);
          const doingContentSortByHigh = renderSortedTasksByHighFlag("doing", sortMethod);
          const doneContentSortByHigh = renderSortedTasksByHighFlag("done", sortMethod);

       
   console.log(sortMethod)
        content = (
            <>
           
            <Bckg>
            <Container>
                    <Nav tasks={tasks} setSortMethod={setSortMethod} setFlagStatus={setFlagStatus}  />
                <TaskContainer>
                   <div className={`column todo ${todoContent.length > 5 ? "scroll" : null}`}>
                    <div className="chevron">Todo</div>
                    <div className='item-container'>
                       
                    {sortMethod === "default" ? todoContent : sortMethod === "title" ? todoContentSort : todoContentSortByHigh}
                    </div> 
                    </div>
                    <div className={`column doing ${todoContent.length > 5 ? "scroll" : null}`}>
                    <div className="chevron">Doing</div>
                    <div className="item-container">
                    {sortMethod === "default" ? doingContent : sortMethod === "title" ? doingContentSort : doingContentSortByHigh}
                    </div>
                    </div>
                    <div className={`column done ${todoContent.length > 5 ? "scroll" : null}`}>
                    <div className="chevron">Done</div>
                    <div className="item-container">
                    {sortMethod === "default" ? doneContent : sortMethod === "title" ? doneContentSort : doneContentSortByHigh}
                    </div>
                    </div>
                    
                </TaskContainer>
                </Container>
                </Bckg>
            </>
        )
    }
    return content
}
export default TasksList