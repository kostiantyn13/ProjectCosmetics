import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import * as R from "ramda";

class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      product: []
    };
  }

  renderItem(item) {
    return (
      <NavLink
        key={item.id}
        to={`/product/${item.name}`}
        className="mdc-list-item"
        activeClassName="mdc-temporary-drawer--selected"
      >
        {item.name}
      </NavLink>
    );
  }

  renderAll() {
    return (
      <NavLink
        key={0}
        to="/product/all"
        className="mdc-list-item"
        activeClassName="mdc-temporary-drawer--selected"
      >
        Все товары
      </NavLink>
    );
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/prod")
      .then(response => response.data)
      .then(product => this.setState({ product }))
      .catch(error => console.error(error));
  }
  render() {
    return (
      <Container>
        <aside className="mdc-permanent-drawer">
          <nav className="mdc-list mdc-list--avatar-list">
            {this.renderAll()}
            {R.compose(R.map(this.renderItem), R.uniqBy(R.prop("name")))(
              this.state.product
            )}
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
