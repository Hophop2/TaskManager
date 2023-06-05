
import { useNavigate } from 'react-router-dom'
import { useGetUsersQuery } from './usersApiSlice'
import { memo } from 'react'
import { Table, Trs } from '../../../../styles/UserStyle'

const User = ({ userId }) => {

    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[userId]
        }),
    })

    const navigate = useNavigate()

    if (user) {
        const handleEdit = () => navigate(`/users/${userId}`)

        const userRolesString = user.roles.toString().replaceAll(',', ', ')

        const cellStatus = user.active ? '' : 'table__cell--inactive'

        return (
            <tr>
                
            
              
                <td>{user.username}</td>
                <td>{userRolesString}</td>
                <td><button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        Edytuj
                    </button>
                    </td>
             
               
                    
                
            </tr>
        )

    } else return null
}

const memoizedUser = memo(User)

export default memoizedUser