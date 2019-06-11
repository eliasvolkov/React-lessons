import React from "react";
import Header from "./Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Layout from "./Layout/Layout";
import Home from "../pages/Home";
import Courses from "../pages/Courses";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/about" component={About} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
