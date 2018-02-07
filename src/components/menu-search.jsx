import React, { Component } from "react";
import styled from "styled-components";

class MenuSearch extends Component {
  render() {
    //const { props } = this;
    return (
      <Container //{...props}
      >
        <div>Menu Search</div>
      </Container>
    );
  }
}

export default MenuSearch;

const Container = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 100px;
  background-color: #7896bf;
`;
