import React from "react";
import styled from "styled-components";

import ToolbarLink from "./toolbar-link";

function Toolbar() {
  return (
    <Container className="mdc-toolbar">
      <nav className="mdc-tab-bar">
        <ToolbarLink exact to="/">
          Косметика
        </ToolbarLink>
        <ToolbarLink to="/stopwatch">Секундомер</ToolbarLink>
        <ToolbarLink to="/delivery">Доставка и оплата</ToolbarLink>
        <ToolbarLink to="/about">О магазине</ToolbarLink>
      </nav>
    </Container>
  );
}
export default Toolbar;

const Container = styled.header`
  height: 50px;
  width: 100%;
  background-color: #8080ff !important;
`;
