import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Apples from "./Apples";
import Peanuts from "./Peanuts";
import Sodas from "./Sodas";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/apples">
          <Apples />
        </Route>
        <Route exact path="/peanuts">
          <Peanuts />
        </Route>
        <Route exact path="/sodas">
          <Sodas />
        </Route>
      </BrowserRouter>
    </div>
  )
}


export default App;
