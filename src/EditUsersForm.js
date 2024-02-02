// src/EditUsersForm.js

import React, { Component } from "react";
import "./UsersForm.css";

class EditUsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.user.id,
      name: props.user.name,
      email: props.user.email,
      gen: props.user.gen,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data to verify functionality
    console.log("Edit Form Data:", this.state);
    // Pass the form data up to the parent component (App.js)
    this.props.handleEditUser(this.state);
  };

  render() {
    return (
      <div className="UserForm">
        <h2>Edit User</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Gen:
            <input
              type="text"
              name="gen"
              value={this.state.gen}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
}

export default EditUsersForm;
