import { configureStore, createSlice } from "@reduxjs/toolkit";

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

// export const addToDo = createAction("ADD");
// export const deleteToDo = createAction("DELETE");

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

// const reducer = createReducer([], (builder) => {
//   builder
//     .addCase(addToDo, (state, action) => {
//       state.push({ text: action.payload, id: Date.now() });
//     })
//     .addCase(deleteToDo, (state, action) => {
//       return state.filter((todo) => todo.id !== action.payload);
//     });
// });

// ✅ createSlice : have reducer & actions inside
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

console.log(toDos.actions);
// ✅ if you use configureStore, you can use Redux Developer Tools
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;

// 2개 이상의 reducer를 사용할 때는

// const allReducer = combineReducers({
//   user,
//   textlist,
// });

// const store = configureStore({reducer:allReducer})

// 데이터가 배열인 경우
// 그리고 데이터가 배열인 경우에는 map으로 꺼낼 때 useSelector로 꺼내온 데이터를 변수로 지정하고 콘솔찍어보면 combineReducers에서 적어놓은 리듀서 이름으로 배열이 만들어져있을거임.
// const data = useSelector(state => state)로 빼왔으면
// data.리듀서이름.map 으로 꺼내면 됨
