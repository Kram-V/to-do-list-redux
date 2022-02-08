import React from "react";
import Modal from "./Modal";
import { deleteTodo, fetchTodo } from "../actions";
import { connect } from "react-redux";

class TodoDelete extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  render() {
    console.log(this.props.todo);

    if (!this.props.todo) {
      return <div>No Data Fetched!</div>;
    }

    return (
      <div>
        <Modal title={this.props.todo.title} id={this.props.todo.id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteTodo, fetchTodo })(
  TodoDelete
);
