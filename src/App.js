import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header.jsx";
import Body from "./components/body.jsx";
import Footer from "./components/footer.jsx";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Sty>
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      </Sty>
    );
  }
}

export default App;
const Sty = styled.div`min-width: 800px;`;
