import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Container>
      <h1>Страница не существует</h1>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  border: 1px solid black;
  height: 700px;
  width: 100%;
  background-color: #7896bf;
`;
