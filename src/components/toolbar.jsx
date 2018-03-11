import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Toolbar() {
  return (
    /*<Container>
      <NavLink exact to="/">
        Косметика
      </NavLink>
      <NavLink to="/stopwatch">Секундомер</NavLink>
      <NavLink to="/delivery">Доставка и оплата</NavLink>
      <NavLink to="/about">О магазине</NavLink>
    </Container>*/
    <Container className="mdc-toolbar">
      <nav className="mdc-tab-bar">
        <NavLink exact to="/" className="mdc-tab">
          Косметика
        </NavLink>
        <NavLink to="/stopwatch" className="mdc-tab">
          Секундомер
        </NavLink>
        <NavLink to="/delivery" className="mdc-tab">
          Доставка и оплата
        </NavLink>
        <NavLink to="/about" className="mdc-tab">
          О магазине
        </NavLink>
      </nav>
    </Container>
  );
}
export default Toolbar;

const Container = styled.header`
  height: 50px;
  width: 100%;
`;
