import { legacy_createStore as createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const PLUS = "PLUS";
const MINUS = "MINUS";

const reducer = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return 0;
  }
};

const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
};

store.subscribe(onChange);

plus.addEventListener("click", () => store.dispatch({ type: PLUS }));
minus.addEventListener("click", () => store.dispatch({ type: MINUS }));
