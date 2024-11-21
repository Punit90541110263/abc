// src/UserList.js
import React from 'react';
import { useUserContext } from './UserContext'; // Import the UserContext

const UserList = () => {
  const { users } = useUserContext(); // Access the users from context

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
