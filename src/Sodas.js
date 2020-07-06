import React from "react";
import { Link } from "react-router-dom";

function Sodas() {

  return (
    <div className="Sodas">
      <h1>Sodas</h1>
      <Link exact to="/">Go back</Link><hr />
      <img src="https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/06/soda.jpg?resize=640%2C360&ssl=1" alt="sodas" />
    </div>
  );
}

export default Sodas;