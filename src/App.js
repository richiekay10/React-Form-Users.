// src/App.js

import React, { useState } from "react";
import Users from "./Users";
import UsersForm from "./UsersForm";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Dzifa Kay", email: "dzifa123@gmail.com", gen: 25 },
    { id: 2, name: "Hubbi Ann", email: "hubbi123@gmail.com", gen: 30 },
  ]);

  const handleFormData = (formData) => {
    setUsers([...users, { ...formData, id: users.length + 1 }]);
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleEditUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <h1>React Users</h1>
      <UsersForm handleFormData={handleFormData} />
      <Users
        users={users}
        handleDeleteUser={handleDeleteUser}
        handleEditUser={handleEditUser}
      />
    </div>
  );
}

export default App;
