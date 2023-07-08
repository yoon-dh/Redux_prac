import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");

  return (
    <>
      <h1>To Do</h1>
      <form>
        <input type="text" value={text} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
