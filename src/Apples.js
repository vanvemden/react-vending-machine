import React from "react";
import { Link } from "react-router-dom";

function Apples() {
  return (
    <div>
      <h1>Apples</h1>
      <Link exact to="/">Go back</Link><hr />
      <img src="https://tse3.mm.bing.net/th?id=OIP.HySrCJe7ATbkNjvwko8rwQHaIZ&pid=Api&P=0&w=300&h=300" alt="Apple" />
    </div>
  )
}
export default Apples;