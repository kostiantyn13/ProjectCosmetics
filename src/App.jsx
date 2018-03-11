import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import BoxMenu from "./components/box-menu";
import Field from "./components/field";
import Footer from "./components/footer";
import Toolbar from "./components/toolbar";

import About from "./page/about";
import Delivery from "./page/delivery";
import Stopwatch from "./page/stopwatch";

class App extends Component {
  render() {
    return (
      <Router>
        <Sty>
          <Header />
          <Toolbar />
          <Route path="/about" component={About} />
          <Route path="/delivery" component={Delivery} />
          <Route path="/stopwatch" component={Stopwatch} />
          <Route exact path="/" component={BoxMenu} />
          <Route exact path="/" component={Field} />

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
