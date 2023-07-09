import { legacy_createStore as createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE";

// ❌ use just react-redux
// export const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//     id: Date.now(),
//   };
// };

// export const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id,
//   };
// };

// ✅ use redux-toolkit : createAction

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.text, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

// store.subscribe()

export default store;
