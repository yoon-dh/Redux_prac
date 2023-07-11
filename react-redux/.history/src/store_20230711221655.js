import { legacy_createStore as createStore } from "redux";
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

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
// 1. 새로운 state를 추가할 수 있음 (이전 하던 방식) ex. filter return new Array)
// 2. mutate state (ex. push doesn't return new Array, just mutate state)

const reducer = createReducer([], (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteToDo, (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    });
});

// if you use configureStore, you can use Redux Developer Tools
const store = configureStore({ reducer });

// store.subscribe()

export default store;
