import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated to use Routes
import { TaskProvider } from './TaskContext';  // Assuming TaskContext exists for task management
import { UserProvider } from './UserContext';  // Import UserProvider for user data
import Navbar from './Navbar';  // Assuming Navbar component exists
import TaskList from './TaskList';  // Assuming TaskList component exists
import AddTaskForm from './AddTaskForm';  // Assuming AddTaskForm component exists
import Footer from './Footer';  // Assuming Footer component exists
import UserList from './UserList';  // Import UserList to display users

function App() {
  return (
    <UserProvider>  {/* Wrap the app with UserProvider */}
      <TaskProvider>
        <Router>
          <Navbar />  {/* Include Navbar component */}
          <Routes>  {/* Replaced Switch with Routes */}
            <Route path="/" element={<AddTaskForm />} /> {/* Route to add tasks */}
            <Route path="/tasks" element={<TaskList />} /> {/* Route to display tasks */}
            <Route path="/users" element={<UserList />} /> {/* Add a route for users */}
          </Routes>
          <Footer />  {/* Include Footer component */}
        </Router>
      </TaskProvider>
    </UserProvider>
  );
}

export default App;
