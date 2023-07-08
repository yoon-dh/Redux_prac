import { legacy_createStore as createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (state = 0) => {
  return state;
};

const store = createStore(reducer);
