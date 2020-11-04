import React from "react";

import Home from "../pages/Home";
import Ongoing from "../pages/Ongoing"
import Favorite from "../pages/Favorite"
import History from "../pages/History"
import Shops from "../pages/Shops"
import AddShops from  "../pages/AddShops"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/favorites">
            <Favorite />
          </Route>
          <Route path="/ongoing">
            <Ongoing/>
          </Route>
          <Route path="/history">
            <History/>
          </Route>
          <Route path="/shops">
            <Shops/>
          </Route>
          <Route path="/addshops">
            <AddShops/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
