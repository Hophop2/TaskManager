import { useParams } from 'react-router-dom'

import useTitle from '../../../../hooks/useTitle'
import { useGetTasksQuery } from './tasksApiSlice'
import { useGetUsersQuery } from '../users/usersApiSlice'
import EditTaskForm from './EditTaskForm'
import Loader from '../../../../components/Loader'
import BigTask from './BigTask'
// import useAuth from '../../hooks/useAuth'



const PreTask = () => {
    useTitle('TaskManager: Edit Task')

    const { id } = useParams()

    // const { username, isManager, isAdmin } = useAuth()

    const { task } = useGetTasksQuery("tasksList", {
        selectFromResult: ({ data }) => ({
            task: data?.entities[id]
        }),
    })

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    if (!task || !users?.length) return (<><Loader /></>)


    // if (!isManager && !isAdmin) {
    //     if (task.username !== username) {
    //         return <p className="errmsg">No access</p>
    //     }
    // }

    const content = <BigTask task={task} users={users} />

    return content
}
export default PreTask