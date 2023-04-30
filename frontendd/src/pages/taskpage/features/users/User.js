
import { useNavigate } from 'react-router-dom'
import { useGetUsersQuery } from './usersApiSlice'
import { memo } from 'react'

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
            <>

            <div className='user-box'>
                <span>Username: {user.username}</span>
                <span>Role: {userRolesString}</span>
            
                    <button
                        className="icon-button table__button"
                        onClick={handleEdit}
                    >
                        Edytuj
                    </button>
                    </div>
                    <br />
            </>
        )

    } else return null
}

const memoizedUser = memo(User)

export default memoizedUser