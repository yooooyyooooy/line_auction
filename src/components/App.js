import React from "react";
import Home from "../pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      {/* <div>
        <Navbar/>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      {/* </div> */}
      <navbar/>
    </Router>
  );
}


function About() {
  return (
    <div>
      <h2>About Me</h2>
      <h3>About You</h3>
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}