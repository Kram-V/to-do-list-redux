import React from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";
import { Link } from "react-router-dom";

class TodoList extends React.Component {
  componentDidMount() {
    return this.props.fetchTodos();
  }

  renderEditDeleteButtons(todo) {
    if (this.props.currentUserId === todo.userId) {
      return (
        <div>
          <Link to={`todos/edit/${todo.id}`}>
            <button>Edit</button>
          </Link>

          <Link to={`todos/delete/${todo.id}`}>
            <button>Delete</button>
          </Link>
        </div>
      );
    }

    return null;
  }

  renderList() {
    if (this.props.isSignedIn) {
      if (this.props.filteredTodosFromCurrUser.length === 0) {
        return <div>NO DATAS SHOW</div>;
      }

      return this.props.filteredTodosFromCurrUser.map((val) => {
        return (
          <div key={val.id}>
            <div>
              <Link to={`/todos/${val.id}`}>
                <h3>Title: {val.title}</h3>
              </Link>
              <h3>Description: {val.description}</h3>
            </div>

            {this.renderEditDeleteButtons(val)}
          </div>
        );
      });
    } else {
      if (this.props.todos.length === 0) {
        return <div>FETCHING DATA...</div>;
      }

      return this.props.todos.map((val) => {
        return (
          <div key={val.id}>
            <div>
              <Link to={`/todos/${val.id}`}>
                <h3>Title: {val.title}</h3>
              </Link>
              <h3>Description: {val.description}</h3>
            </div>

            {this.renderEditDeleteButtons(val)}
          </div>
        );
      });
    }
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  const todos = Object.values(state.todos);
  const filteredTodosFromCurrUser = todos.filter(
    (todo) => todo.userId === state.auth.userId
  );

  return {
    currentUserId: state.auth.userId,
    todos,
    filteredTodosFromCurrUser,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchTodos })(TodoList);
