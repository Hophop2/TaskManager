import { useGetUsersQuery } from "./usersApiSlice"
import User from './User'
import useTitle from "../../../../hooks/useTitle"
import { Bckg } from "../../../../styles/BckgStyle"
import { Container } from "../../../../styles/UserStyle"




const UsersList = () => {
    useTitle('techNotes: Users List')

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery('usersList', {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = users

        const tableContent = ids?.length && ids.map(userId => <User key={userId} userId={userId} />)

        content = (
            <>
            <Bckg>
                <Container>
                    <h1>Users List</h1>
            {tableContent}
            </Container>
            </Bckg>
            </>
        )
    }

    return content
}
export default UsersList