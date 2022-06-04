import * as React from 'react';
import NavBar from './Navbar'
import Users from './Users'
import { Routes, Route } from "react-router-dom";
import UserCreate from './UserCreate';
import UserUpdate from './UserUpdate';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="create" element={<UserCreate />} />
        <Route path="update/:id" element={<UserUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
