import React, { Component } from "react";
import styled from "styled-components";
import product from "../prod";
import Prod from "./product";

function Presentation(props) {
  return (
    <Sty>
      {product.map(elem => (
        <Prod
          name={elem.name}
          administration={elem.administration}
          price={elem.price}
        />
      ))}
    </Sty>
  );
}

export default Presentation;

const Sty = styled.div`
  height: 400px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #e3edf2;
`;
