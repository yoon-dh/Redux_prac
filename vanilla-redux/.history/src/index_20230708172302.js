const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const handleplus = () => {
  let content = number.innerText;
  number.innerText = content++;
};

const handleminus = () => {};

plus.addEventListener("click", handleplus);
minus.addEventListener("click", handleminus);
