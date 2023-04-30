import { useGetTasksQuery } from "./tasksApiSlice"
import Task from "./Task"
import { Container, TaskContainer } from "../../TaskPageStyle"
import Nav from "../../components/Nav"
import { Bckg } from "../../../../styles/BckgStyle"
import Loader from "../../../../components/Loader"



const TasksList = () => {
    const {
        data: tasks,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTasksQuery(undefined, {
        pollingInterval: 10000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if(isLoading)  content = <Loader />

    if(isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if(isSuccess) {
        const {ids} = tasks
        const wrapContent = ids?.length
        ? ids.map(taskId => <Task key={taskId} taskId={taskId} />)
        : null
console.log(tasks)
        content = (
            <>
           
            <Bckg>
            <Container>
                    <Nav />
                <TaskContainer>
                    <div className="column todo">
                    <div className="chevron">Todo</div>
                    <div className="item-container">
                    {wrapContent}
                    </div>
                    </div>
                    <div className="column doing">
                    <div className="chevron">Doing</div>
                    <div className="item-container">
                    {wrapContent}
                    </div>
                    </div>
                    <div className="column done">
                    <div className="chevron">Done</div>
                    <div className="item-container">
                    {wrapContent}
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