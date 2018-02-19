import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import BoxMenu from "./components/box-menu";
import Field from "./components/field";
import Footer from "./components/footer";
import HeaderMenu from "./components/header-menu";
import styled from "styled-components";

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
