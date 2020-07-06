import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {

  return (
    <div className="VendingMachine">
      <h1>Vending Machine</h1>
      <ul>
        <li><Link exact to="/apples">Apples</Link></li>
        <li><Link exact to="/peanuts">Peanuts</Link></li>
        <li><Link exact to="/sodas">Sodas</Link></li>
      </ul>
      <hr />
      <img src="https://sc01.alicdn.com/kf/UT8WWkgXZFaXXagOFbXt/205728887/UT8WWkgXZFaXXagOFbXt.jpg_.webp" alt="vending machine" />
    </div>
  );

}

export default VendingMachine;