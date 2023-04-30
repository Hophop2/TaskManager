import NewTaskForm from './NewTaskForm'
 import { useGetUsersQuery } from '../users/usersApiSlice'

import useTitle from '../../../../hooks/useTitle'


const NewTask = () => {
    useTitle('techTasks: New Task')

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    if (!users?.length) return (<div>Czekamy</div>)


    

    const content = <NewTaskForm  users={users} />
    
    return content
}

export default NewTask