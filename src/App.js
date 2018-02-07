import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header.jsx";

import BoxMenu from "./components/box-menu.jsx";
import Field from "./components/field.jsx";
import Footer from "./components/footer.jsx";
import HeaderMenu from "./components/header-menu.jsx";
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
const Sty = styled.div`min-width: 800px;`;
