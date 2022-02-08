import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import GoogleAuth from "./GoogleAuth";
import { connect } from "react-redux";

const Header = (props) => {
  const createButton = () => {
    if (props.isSignedIn) {
      return (
        <li className="nav-link">
          <Link className="link" to="/todos/new">
            Create
          </Link>
        </li>
      );
    }

    return null;
  };

  return (
    <div>
      <div className="header-nav">
        <Link className="link" to="/">
          To Do List
        </Link>

        <ul className="nav-links">
          <li className="nav-link">
            <Link className="link" to="/">
              Lists
            </Link>
          </li>

          {createButton()}

          <li className="nav-link">
            <GoogleAuth />
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Header);
