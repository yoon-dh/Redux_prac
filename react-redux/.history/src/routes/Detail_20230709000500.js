import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const id = useParams().id;
  const toDos = useSelector((state) => state);

  console.log(id);
  return <h1>Detail</h1>;
}

export default Detail;
