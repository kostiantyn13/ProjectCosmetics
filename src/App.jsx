import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Header from "./components/header";
import BoxMenu from "./components/box-menu";
import Field from "./components/field";
import Footer from "./components/footer";
import HeaderMenu from "./components/header-menu";

class App extends Component {
  render() {
    return (
      <Sty>
        <Header />
        <HeaderMenu />
        <BoxMenu />
        <Field />
        <Footer />
      </Sty>
    );
  }
}

export default App;

const Sty = styled.div`
  min-width: 800px;
  margin: 0;
  padding: 0;
`;
