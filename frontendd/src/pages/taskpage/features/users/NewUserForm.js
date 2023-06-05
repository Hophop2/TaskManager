import { useState, useEffect } from "react"
import { useAddNewUserMutation } from "./usersApiSlice"
import { Link, useNavigate } from "react-router-dom"


import useTitle from "../../../../hooks/useTitle"
import { ROLES } from "../../../../config/roles"
import { Bckg } from "../../../../styles/BckgStyle"

import { StandBtn } from "../../../../styles/StandardBtn"
import { Container } from "../../../../styles/loginPageStyle"


const USER_REGEX = /^[A-z]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/
 
const NewUserForm = () => {
    useTitle('techNotes: New User')

    const [addNewUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewUserMutation()

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [validUsername, setValidUsername] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [roles, setRoles] = useState(["Employee"])

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username))
    }, [username])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password))
    }, [password])

    useEffect(() => {
        if (isSuccess) {
            setUsername('')
            setPassword('')
            setRoles([])
            navigate('/users')
        }
    }, [isSuccess, navigate])

    const onUsernameChanged = e => setUsername(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)
    const onConfirmPasswordChanged = e => setConfirmPassword(e.target.value)

    const onRolesChanged = e => {
        const values = Array.from(
            e.target.selectedOptions, //HTMLCollection 
            (option) => option.value
        )
        setRoles(values)
    }

    const canSave = [roles.length, validUsername, validPassword].every(Boolean) && !isLoading
   

    const onSaveUserClicked = async (e) => {
        e.preventDefault()
        if (canSave && password === confirmPassword) {
            await addNewUser({ username, password, roles })
        }
    }

    const options = Object.values(ROLES).map(role => {
        return (
            <option
                key={role}
                value={role}

            > {role}</option >
        )
    })

    const errClass = isError ? "errmsg" : "offscreen"
    const validUserClass = !validUsername ? 'form__input--incomplete' : ''
    const validPwdClass = !validPassword ? 'form__input--incomplete' : ''
    const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''


    const content = (
        <>
         <Bckg>
    <Container>
      <div className="box">
        <div className="wrapper">
          <div className="text-box">
            <h1>Task Manager</h1>
            <span className="login">Create user</span>
          </div>

          <form onSubmit={onSaveUserClicked}>
            <div className="input-box">
              <input
                type="text"
                name="username"
                value={username}
                onChange={onUsernameChanged}
                required
              />
              <span>Username</span>
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                value={password}
                onChange={onPasswordChanged}
                required
              />
              <span>Password</span>
            </div>

            <div className="input-box">
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onConfirmPasswordChanged}
                required
              />
              <span> Confirm Password</span>
            </div>

            <label className="form__label" htmlFor="roles">
                    ASSIGNED ROLES:</label>
                    <details>
                    <summary>Roles</summary>
                <select
                    id="roles"
                    name="roles"
                    className={`form__select ${validRolesClass}`}
                    multiple={true}
                    size="3"
                    value={roles}
                    onChange={onRolesChanged}
                >
                    
                      {options}
                      
                </select>
                </details>
                <br />

            <StandBtn>Sign in</StandBtn>
          </form>
        </div>
      </div>
    </Container>
    </Bckg>
        </>
    )

    return content
}
export default NewUserForm