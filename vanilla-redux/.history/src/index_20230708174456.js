import { legacy_createStore as createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (count = 0, action) => {
  if (action.type == -"plus") {
    count++;
  }
  return count;
};

const store = createStore(reducer);

console.log(store.getState());

store.dispatch({ type: "plus" });
