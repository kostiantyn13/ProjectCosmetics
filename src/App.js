import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header.jsx";
import Body from "./components/body.jsx";
import Footer from "./components/footer.jsx";
import Header_menu from "./components/header_menu.jsx";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Sty>
        <div>
          <Header />
          <Header_menu />
          <Body />
          <Footer />
        </div>
      </Sty>
    );
  }
}

export default App;
const Sty = styled.div`min-width: 800px;`;
