import React from "react";
import { connect } from "react-redux";
import { SignIn, SignOut } from "../actions";
import { Link } from "react-router-dom";

class GoogleAuth extends React.Component {
  // state = { isSignedIn: null };

  componentDidMount() {
    // TO LOAD ONLY THE LIBRARY
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "619113781943-939c9tbj9p21ttni5br442l1691is4a7.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.SignIn(this.auth.currentUser.get().getId());
    } else {
      this.props.SignOut();
    }
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <Link to="/">
          <button onClick={() => this.auth.signOut()}>Sign Out</button>
        </Link>
      );
    } else {
      return (
        <button onClick={() => this.auth.signIn()}>Sign In with Google</button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { SignIn, SignOut })(GoogleAuth);
