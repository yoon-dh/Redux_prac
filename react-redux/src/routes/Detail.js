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
      <h3>title : {todoText?.text}</h3>
      <h5>Created at : {todoText?.id}</h5>
    </>
  );
}

export default Detail;
