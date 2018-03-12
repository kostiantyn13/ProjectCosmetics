import React, { Component } from "react";

import styled from "styled-components";

class SideNav extends Component {
  render() {
    return (
      <Container>
        <aside className="mdc-permanent-drawer">
          <nav className="mdc-list mdc-list--avatar-list">
            <a>Vitalik</a>
          </nav>
        </aside>
      </Container>
    );
  }
}

export default SideNav;

const Container = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  height: 600px;
  width: 200px;
  background-color: #7896bf;
  float: left;
  box-shadow: 3px 3px 4px #6487b7;
  padding: 10px;
`;
