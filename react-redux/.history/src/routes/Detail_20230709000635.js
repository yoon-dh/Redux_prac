import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const id = parseInt(useParams().id);
  const toDos = useSelector((state) => state);
  const todoText = toDos.find((todo) => todo.id === id);

  return (
    <>
      <h1>Detail</h1>
      <h3>title : {}</h3>
    </>
  );
}

export default Detail;
