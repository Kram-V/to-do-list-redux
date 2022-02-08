import React from "react";
import "./css/App.css";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import TodoCreate from "./TodoCreate";
import TodoDelete from "./TodoDelete";
import TodoEdit from "./TodoEdit";
import TodoList from "./TodoList";
import TodoShow from "./TodoShow";
import history from "../history";

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/todos/new" exact component={TodoCreate} />
          <Route path="/todos/edit/:id" exact component={TodoEdit} />
          <Route path="/todos/:id" exact component={TodoShow} />
          <Route path="/todos/delete/:id" exact component={TodoDelete} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
