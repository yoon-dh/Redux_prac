import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const id = useParams();
  return <h1>Detail</h1>;
}

export default Detail;
