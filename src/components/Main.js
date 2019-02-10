import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import BookList from "./BookList";
import About from "./About";
import NotFound from "./NotFound";
import CartList from "./CartList";

const Main = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/books" component={BookList} />
      <Route path="/about" component={About} />
      <Route path="/cart" component={CartList} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Main;
