import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Options } from "./pages/Options";
import { FormLeft } from "./pages/FormLeft";
import { FormRight } from "./pages/FormRight";
import { Result } from "./pages/Result";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Options />
        </Route>
        <Route path="/use-box">
          <FormRight />
        </Route>
        <Route path="/use-messure">
          <FormLeft />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
