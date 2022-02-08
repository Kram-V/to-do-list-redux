import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import todoReducer from "./todoReducer";

export default combineReducers({
  auth: authReducer,

  // COMING FROM THE REDUX FORM
  form: formReducer,
  todos: todoReducer,
});
