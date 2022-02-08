import React from "react";
import ReactDOM from "react-dom";
import { deleteTodo } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import history from "../history";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Delete Todo</div>
        <div className="content">
          Are you sure you want to delete <b>{props.title} to do</b>?
        </div>
        <div className="actions">
          <button onClick={() => props.deleteTodo(props.id)}>Delete</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default connect(null, { deleteTodo })(Modal);
