import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Toolbar() {
  return (
    <Container>
      <Link to="/">Косметика</Link>
      <Link to="/stopwatch">Секундомер</Link>
      <Link to="/delivery">Доставка и оплата</Link>
      <Link to="/about">О магазине</Link>
    </Container>
  );
}
export default Toolbar;

const Container = styled.div`
  border: 1px solid black;
  height: 50px;
  width: 100%;
  background-color: #7896bf;
`;
