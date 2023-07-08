const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const handleplus = () => {
  count = count + 1;
};

const handleminus = () => {
  count = count - 1;
};

plus.addEventListener("click", handleplus);
minus.addEventListener("click", handleminus);
