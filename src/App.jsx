import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import SideNav from "./components/side-nav";
import Field from "./components/field";
import Footer from "./components/footer";
import Toolbar from "./components/toolbar";

import About from "./page/about";
import Delivery from "./page/delivery";
import Stopwatch from "./page/stopwatch";
import NotFound from "./page/not-found";
import Home from "./page/home";

class App extends Component {
  render() {
    return (
      <Router>
        <Sty>
          <Header />
          <Toolbar />
          <Route path="/product" component={SideNav} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/stopwatch" component={Stopwatch} />
            <Route path="/product" component={Field} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Sty>
      </Router>
    );
  }
}

export default App;

const Sty = styled.div`
  min-width: 800px;
  margin: 0;
  padding: 0;
`;
//const Sty = styled(Router)``
