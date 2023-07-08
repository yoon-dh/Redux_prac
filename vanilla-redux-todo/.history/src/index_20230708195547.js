import { legacy_createStore as createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: action.id }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    li.id = toDo.id;
    li.innerText = toDo.text;

    li.appendChild(deleteBtn);
    ul.appendChild(li);
  });
};

store.subscribe(paintTodos);

const addTodo = (text) => {
  store.dispatch({ type: ADD_TODO, text: text, id: Date.now() });
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addTodo(toDo);
};

form.addEventListener("submit", onSubmit);