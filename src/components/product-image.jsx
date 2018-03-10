import React from "react";
import styled from "styled-components";

const Img = props => (
  <Container>
    <Image alt="no photo" src={props.link} />
  </Container>
);

export default Img;

const Image = styled.img`
  display: block;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
`;
const Container = styled.div`
  width: 200px;
  height: 100%;
  float: left;
  margin: 10px;
`;
