import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../store";

function Home() {
  const [text, setText] = useState("");

  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(toDos);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    dispatch(addToDo(text));
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Write Todo"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((todo) => {
          console.log(todo);
          return (
            <li key={todo.id} id={todo.id}>
              {todo.text}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
