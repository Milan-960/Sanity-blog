import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Blog from "./Pages/Blog";
import SinglePost from "./Pages/SinglePost";
import Error from "./Pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/blog/:slug">
          <SinglePost />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
