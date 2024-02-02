// src/UsersForm.js

import React, { Component } from "react";
import "./UsersForm.css";

class UsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
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
    console.log("Form Data:", this.state);
    // Pass the form data up to the parent component (App.js)
    this.props.handleFormData(this.state);
  };

  render() {
    return (
      <div>
        <h2>User Form</h2>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default UsersForm;
