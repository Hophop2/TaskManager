import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { Bckg } from "../../styles/BckgStyle";
import { useAddNewUserMutation } from "../taskpage/features/users/usersApiSlice";
import { StandBtn } from "../../styles/StandardBtn";
import { Container } from "../../styles/loginPageStyle";



const Register = () => {
  const [registerUser, { status, data, error }] = useAddNewUserMutation(initialUserData => axios.post('/users', initialUserData));
  const history = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",

    password: "",
    username: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);

    registerUser(loginData);
  };
  return (
    <Bckg>
    <Container>
      <div className="box">
        <div className="wrapper">
          <div className="text-box">
            <h1>Task Manager</h1>
            <span className="login">Create your account</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                required
              />
              <span>Username</span>
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                required
              />
              <span>e-mail</span>
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
              />
              <span>Password</span>
            </div>

            <div className="input-box">
              <input
                type="password"
                name="confirmPassword"
                value={loginData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span> Confirm Password</span>
            </div>

            <StandBtn>Create my account</StandBtn>
          </form>
          <div className="span-text">
            <span className="first-span">
              Already have an account?<Link to="/"> Log in</Link>
            </span>
            <span className="second-span">
              <Link to="/forgot">Forgot password?</Link>
            </span>
          </div>
        </div>
      </div>
    </Container>
    </Bckg>
  );
};

export default Register;
