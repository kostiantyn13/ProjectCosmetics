import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header.jsx";
import Body from "./components/body.jsx";
import Footer from "./components/footer.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
