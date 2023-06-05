import { useGetUsersQuery } from "./usersApiSlice"
import User from './User'
import useTitle from "../../../../hooks/useTitle"
import { Bckg } from "../../../../styles/BckgStyle"
import { Container } from "../../../../styles/UserStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { Icon } from "../../../../styles/BigTaskStyle"
import Clock from "../../components/Clock"




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
                    <div className="nav-wrapper">
                    <Icon>
    <Link to="/tasks"><FontAwesomeIcon icon={faHouse} size="2xl"  /></Link>
    </Icon>
                    
                    <Link style={{textDecoration: "none"}} to="/users/new"><span className="add-user">Add User</span></Link>
                    </div>
                    <h1>Users List</h1>
                   
                    <table>
                        <thead>
                    <tr>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Edit</th>
                </tr>
                    {tableContent}
                    </thead>
                    </table>
                    
                   
        
            </Container>
            </Bckg>
            </>
        )
    }

    return content
}
export default UsersList