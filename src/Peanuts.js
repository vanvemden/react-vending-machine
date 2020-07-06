import React from "react";
import { Link } from "react-router-dom";

function Peanuts() {
  return (
    <div className="Peanuts">
      <h1>Peanuts</h1>
      <Link exact to="/">Go back</Link><hr />
      <img src="https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/a492d669f3933792-gLN-ek6T-zoom.jpg" alt="peanuts" />
    </div>
  );
}

export default Peanuts;