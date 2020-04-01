import React from "react";
import { Options } from "./pages/Options";
import { FormLeft } from "./pages/FormLeft";
import { FormRight } from "./pages/FormRight";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      </Switch>
    </Router>
  );
}

export default App;
