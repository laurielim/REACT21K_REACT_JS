import React from "react";

import Boxes from "./Boxes";
import Animals from "./Animals";
import { Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
};
const Gallery = () => {
  return (
    <div>
      <h1>This is the gallery page</h1>
    </div>
  );
};
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/boxes">Boxes</Link>
        </li>
        <li>
          <Link to="/animals">Animals</Link>
        </li>
      </ul>
    </nav>
  );
};

const Main = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/boxes" component={Boxes} />
        <Route path="/animals" component={Animals} />
      </Switch>
    </div>
  );
};

export default Main;
