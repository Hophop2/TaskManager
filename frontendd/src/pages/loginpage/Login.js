import axios from "axios";
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { Bckg } from "../../styles/BckgStyle";
import { StandBtn } from "../../styles/StandardBtn";
import { Container } from "../../styles/loginPageStyle";



const Login = () => {
  const history = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    // tu wysylamy dane do serwera
    try {
      await axios
        .post("", {
          loginData,
        })
        .then((res) => {
          if ((res.data = "exist")) {
            history("/tasks/taskmanager", { state: { id: loginData.email } });
          } else if ((res.data = "not exist")) {
            alert("User is not logged in");
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Bckg>
    <Container>
      <div className="box">
        <div className="wrapper">
          <div className="text-box">
            <h1>Task Manager</h1>
            <span className="login">Login to manage your account</span>
          </div>

          <form onSubmit={handleSubmit}>
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

            <StandBtn>Sign in</StandBtn>
          </form>
          <div className="span-text">
            <span className="first-span">
              Already don't have an account?<Link to="/reg"> Register</Link>
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

export default Login;
