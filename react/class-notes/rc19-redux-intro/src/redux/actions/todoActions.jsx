import {
  ADD_TODO,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoType";

export const addTodo = (payload) => {
  return { ptype: ADD_TODO, payload: payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload: payload };
};
export const clearTodo = () => {
  return { type: CLEAR_TODO_LIST };
};
export const toggleTodo = (payload) => {
  return { type: TOGGLE_TODO, payload: payload };
};
