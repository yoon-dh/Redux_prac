import { legacy_createStore as createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (count = 0, action) => {
  if (action.type === "PLUS") {
    count++;
  } else if (action.type === "MINUS") {
    count--;
  } else {
    return count;
  }
};

const store = createStore(reducer);

plus.addEventListener("click", () => store.dispatch({ type: "PLUS" }));
minus.addEventListener("click", () => store.dispatch({ type: "MINUS" }));
