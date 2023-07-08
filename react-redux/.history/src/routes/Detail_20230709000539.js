import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const id = parseInt(useParams().id);
  const toDos = useSelector((state) => state);

  return (
    <>
      <h1>Detail</h1>;
    </>
  );
}

export default Detail;
