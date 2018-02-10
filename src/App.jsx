import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header.jsx";
import BoxMenu from "./components/box-menu.jsx";
import Field from "./components/field.jsx";
import Footer from "./components/footer.jsx";
import HeaderMenu from "./components/header-menu.jsx";
import styled from "styled-components";
/*
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
`;*/
function App() {
  return (
    <div>
      <header>
        <h1>React TODO</h1>
      </header>
      <section className="todo-list">
        <div className="todo">
          <button className="checbox icon">
            <i className="material-icons">check_box_outline_blank</i>
          </button>

          <span className="todo-title">Изучить REACT</span>
        </div>
      </section>
    </div>
  );
}
export default App;
