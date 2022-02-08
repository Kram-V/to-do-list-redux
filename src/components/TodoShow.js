import React from "react";
import { fetchTodo } from "../actions";
import { connect } from "react-redux";

class TodoShow extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  render() {
    if (!this.props.todo) {
      return <div>No Data Fetched!</div>;
    }

    return (
      <div>
        <h1>{this.props.todo.title}</h1>
        <p>{this.props.todo.description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { todo: state.todos[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchTodo })(TodoShow);
