import { legacy_createStore as createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

// ❌ use just react-redux : createAction
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

// ❌ use just react-redux : createReducer

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// ✅ use redux-toolkit : createReducer

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => state.filter((todo) => todo.id !== action.payload);
});

const store = createStore(reducer);

// store.subscribe()

export default store;
