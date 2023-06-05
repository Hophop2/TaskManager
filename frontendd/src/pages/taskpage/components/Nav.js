import React, { useState } from "react";
import { Container, SideNav, TopNav } from "../TaskPageStyle";
import { useNavigate } from "react-router-dom";
import Clock from "./Clock";

const Nav = ({ setSortMethod}) => {
  const [show, setShow] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [animatedIndex, setAnimatedIndex] = useState(-1);
  const navigate = useNavigate()
 

  const handleShow = () => {
    setShow(!show);
    setIsAnimated(true);
    setAnimatedIndex(0);
  };

  

  const Add = () => navigate(`/tasks/new`)
  const toUser = () => navigate(`/users`)
  return (
    <Container>
      <SideNav>
        <div className="h1-box">
          <h1>Task Manager</h1>
        </div>
        <div onClick={toUser} className="list-workspace item">
          <span>Users</span>
          
        </div>
        <div className="workspace item">
          <span onClick={handleShow}>Workspace</span>
          
        </div>
        {show ? (
          <>
            <ul className="ul-workspace">
              <li onClick={Add}><span>Add</span></li>
              <li ><span>Filter
              </span>
              </li>
              <li  className="li-list"><span>Sort</span></li>
              <ol>
                <li 
                  onClick={() => {
                    setSortMethod(currMethod => currMethod === 'default' ? 'high' : currMethod === "title" ? "high" : currMethod === "low" ? "high" : "default")
                   
              }}
              ><span>By Highest Task</span></li>

                <li
                  onClick={() => {
                    setSortMethod(currMethod => currMethod === 'default' ? 'low' : currMethod === "title" ? "low" : currMethod === "high" ? "low" : "default")
                    
                    }}
                    ><span>By lowest Task</span></li>

                <li onClick={() =>  setSortMethod(currMethod => currMethod === 'title' ? 'default' : currMethod === "high" ? "title" : "title")}  ><span>Alphabetical</span></li>
                </ol>
              
            </ul>
          </>
        ) : null}

<div >

                  <Clock />
        </div>
          
        
      </SideNav>
    </Container>
  );
};

export default Nav;
