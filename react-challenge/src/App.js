import React from "react";
import Login from "./Login";
import Home from "./Home";
import Repos from "./Repos";
import Followers from "./Followers";
import Following from "./Following";
import UserInfo from "./UserInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ConxtextProvider } from "./context";

function App() {

  return (
    <ConxtextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/repos">
            <Repos />
          </Route>
          <Route exact path="/followers">
            <Followers />
          </Route>
          <Route exact path="/following">
            <Following />
          </Route>
          <Route exact path="/userinfo">
            <UserInfo />
          </Route>
        </Switch>
      </Router>
    </ConxtextProvider>
  );
}

export default App;
