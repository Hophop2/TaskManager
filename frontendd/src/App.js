import React from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route,Routes, RouterProvider } from "react-router-dom";


import Layout from "./Layout";
import Forgotpass from "./pages/loginpage/Forgotpass";
import Login from "./pages/loginpage/Login";

import Register from "./pages/loginpage/Register";

import TasksList from "./pages/taskpage/features/tasks/TasksList";
import NewTask from "./pages/taskpage/features/tasks/NewTask";
import UsersList from "./pages/taskpage/features/users/UsersList";
import NewUserForm from "./pages/taskpage/features/users/NewUserForm";
import EditTask from "./pages/taskpage/features/tasks/EditTask";
import BigTask from "./pages/taskpage/features/tasks/BigTask";
import PreTask from "./pages/taskpage/features/tasks/PreTask";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path="/" element={<Layout />}>
        <Route index  element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/forgot" element={<Forgotpass />} />
        

        <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path="new" element={<NewUserForm />} />
                    {/* <Route path=":id" element={<EditUser />} /> */}
                  </Route>

                  <Route path="tasks">
                    <Route index element={<TasksList />} />
                    <Route path=":id">
                    <Route index element={<PreTask />}/>
                    <Route path="edit" element={<EditTask />} />
                    </Route>
                    
                    <Route path="new" element={<NewTask />} />
                </Route>
      </Route>
    
      
    ))



  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;