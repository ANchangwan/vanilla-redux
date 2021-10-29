import { createStore } from "redux";
import { countModify } from "./redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const num = document.getElementById("num");

const countStore = createStore(countModify);

const ADD = "Add";
const Minus = "Minus";

const onChange = () => {
  num.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: Minus });
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
