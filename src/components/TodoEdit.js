import React from "react";
import _ from "lodash";
import { fetchTodo, editTodo } from "../actions";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";

class TodoEdit extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editTodo(this.props.todo.id, formValues);
  };

  render() {
    if (!this.props.todo) {
      return <h3>No Data Fetched</h3>;
    }

    return (
      <div>
        {/* initialValues IS CAME FROM THE REDUX FORM */}
        <TodoForm
          initialValues={_.pick(this.props.todo, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodo, editTodo })(TodoEdit);
