import React, { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const [text, setText] = useState("");

  const toDos = useSelector((state) => state);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
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
      <ul></ul>
    </>
  );
}

export default Home;
