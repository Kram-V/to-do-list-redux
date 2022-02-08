import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  FETCH_TODO,
  FETCH_TODOS,
} from "./types";
import history from "../history";
import todos from "../apis/todos";

export const SignIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const SignOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createTodo = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const result = await todos.post("/todos", { ...formValues, userId });

  dispatch({ type: CREATE_TODO, payload: result.data });

  history.push("/");
};

export const fetchTodos = () => async (dispatch) => {
  const result = await todos.get("/todos");

  dispatch({ type: FETCH_TODOS, payload: result.data });
};

export const fetchTodo = (id) => async (dispatch) => {
  const result = await todos.get(`/todos/${id}`);

  dispatch({ type: FETCH_TODO, payload: result.data });
};

export const editTodo = (id, formValues) => async (dispatch) => {
  const result = await todos.patch(`/todos/${id}`, formValues);

  dispatch({ type: EDIT_TODO, payload: result.data });

  history.push("/");
};

export const deleteTodo = (id) => async (dispatch) => {
  await todos.delete(`/todos/${id}`);

  dispatch({ type: DELETE_TODO, payload: id });

  history.push("/");
};
