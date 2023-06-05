import React from "react";
import { Link } from "react-router-dom";

import { Bckg } from "../../styles/BckgStyle";
import { StandBtn } from "../../styles/StandardBtn";
import { Container } from "../../styles/loginPageStyle";

const Forgotpass = () => {
  return (
    <Bckg>
    <Container>
      <div className="box">
        <div className="wrapper">
          <div className="text-box">
            <h1>Task Manager</h1>
            <span className="login">Create a new password</span>
          </div>

          <form>
            <div className="input-box">
              <input type="email" required />
              <span>e-mail</span>
            </div>

            <StandBtn>Set my password</StandBtn>
          </form>
          <div className="span-text">
            <span className="first-span">
              Already have an account?<Link to="/"> Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </Container>
    </Bckg>
  );
};

export default Forgotpass;
