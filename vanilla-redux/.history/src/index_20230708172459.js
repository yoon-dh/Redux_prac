const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const handleplus = () => {};

const handleminus = () => {
  number.innerText = content - 1;
};

plus.addEventListener("click", handleplus);
minus.addEventListener("click", handleminus);
