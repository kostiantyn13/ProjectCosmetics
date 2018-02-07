import React, { Component } from "react";
import styled from "styled-components";
import { Search } from "menu-search";

class MenuList extends Component {
  render() {
    return (
      <MenuSearch>
        <div>Menu search</div>
      </MenuSearch>
    );
  }
}

export default MenuList;

const Sty = styled.div`border-radius: 10px;`;
const MenuSearch = styled(Search)`background-color: grey;`;
