import React, { useState } from "react";
import { Container, SideNav, TopNav } from "../TaskPageStyle";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const handleShow = () => {
    setShow(!show);
  };

  const Add = () => navigate(`/tasks/new`)
  return (
    <Container>
      <SideNav>
        <div className="h1-box">
          <h1>Task Manager</h1>
        </div>

        <div className="workspace item">
          <span onClick={handleShow}>Workspace</span>
          <div className="line"></div>
        </div>
        {show ? (
          <>
            <ul className="ul-workspace">
              <li onClick={Add}>Add</li>
              <li>Filter</li>
              <li>Sort</li>
            </ul>
          </>
        ) : null}

        <div className="list-workspace item">
          <span>List of Workspace</span>
          <div className="line"></div>
        </div>
      </SideNav>
    </Container>
  );
};

export default Nav;
