import React, { useState } from "react";
import EditUsersForm from "./EditUsersForm";
import "./Users.css";

function Users({ users, handleDeleteUser, handleEditUser }) {
  const [editingUser, setEditingUser] = useState(null);

  const handleEditButtonClick = (user) => {
    setEditingUser(user);
  };

  return (
    <div>
      <h2>User List (from Users Component)</h2>
      <div className="user-list">
        {users.map((user) => (
          <div className="user" key={user.id}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong>{" "}
            {user.email}, <strong>Gen:</strong> {user.gen}
            <div>
              {/* Button to delete user */}
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              {/* Button to edit user */}
              <button onClick={() => handleEditButtonClick(user)}>Edit</button>
            </div>
            {/* Render EditUsersForm if the user is being edited */}
            {editingUser && editingUser.id === user.id && (
              <EditUsersForm
                user={editingUser}
                handleEditUser={handleEditUser}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
