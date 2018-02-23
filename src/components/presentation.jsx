import React, { Component } from "react";
import styled from "styled-components";
import product from "../prod";
import Prod from "./product";

function Presentation(props) {
  return (
    <Container>
      {product.map(elem => (
        <Prod
          key={elem.id}
          name={elem.name}
          administration={elem.administration}
          price={elem.price}
          available={elem.available}
          link={elem.link}
        />
      ))}
    </Container>
  );
}

export default Presentation;

const Container = styled.div`
  height: 400px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #e3edf2;
`;
