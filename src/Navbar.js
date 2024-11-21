// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Add Task</Link></li>
        <li><Link to="/tasks">Task List</Link></li>
        <li><Link to="/users">User List</Link></li> {/* Link to users */}
      </ul>
    </nav>
  );
};

export default Navbar;
