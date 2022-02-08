import React from "react";
import "./css/Form.css";
import { connect } from "react-redux";
import { createTodo } from "../actions";
import TodoForm from "./TodoForm";

class TodoCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createTodo(formValues);
  };

  render() {
    return <TodoForm onSubmit={this.onSubmit} />;
  }
}

export default connect(null, { createTodo })(TodoCreate);
