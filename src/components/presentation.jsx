import React, { Component } from "react";
import styled from "styled-components";
import { CSSTransitionGroup } from "react-transition-group";
import axios from "axios";

import Prod from "./product";
import Form from "./form";

class Presentation extends Component {
  constructor() {
    super();
    this.state = {
      product: []
    };
    this.handleStatusWish = this.handleStatusWish.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.filterProduct = this.filterProduct.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/api/prod")
      .then(response => response.data)
      .then(product => this.setState({ product }))
      .catch(this.handleError);
  }
  handleAdd(link, name, administration, price, available, wish) {
    axios
      .post("/api/prod", { link, name, administration, price, available, wish })
      .then(response => response.data)
      .then(add_product => {
        const product = [...this.state.product, add_product];
        this.setState({ product });
      })
      .catch(this.handleError);
  }

  handleStatusWish(id) {
    axios
      .patch(`/api/prod/${id}`)
      .then(response => {
        let product = this.state.product.map(el => {
          if (el.id === id) {
            el = response.data;
          }
          return el;
        });
        this.setState({ product });
      })
      .catch(this.handleError);
  }

  handleDelete(id) {
    axios
      .delete(`/api/prod/${id}`)
      .then(() => {
        const product = this.state.product.filter(el => el.id !== id);
        this.setState({ product });
      })
      .catch(this.handleError);
  }
  handleError(error) {
    console.error(error);
  }
  filterProduct() {
    const product = this.state.product.filter(
      el => el.name === this.props.match.params.topic
    );
    this.setState({ product });
  }
  render() {
    // this.filterProduct();

    return (
      <Container>
        <Form onAdd={this.handleAdd} />
        <CSSTransitionGroup
          component="section"
          transitionName="slide"
          transitionAppear={true}
          transitionAppearTimeout={5000}
          // transitionEnter={false}
          //transitionLeave={false}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.state.product.map(elem => (
            <Prod
              key={elem.id}
              wish={elem.wish}
              id={elem.id}
              name={elem.name}
              administration={elem.administration}
              price={elem.price}
              link={elem.link}
              available={elem.available}
              onStatusWish={this.handleStatusWish}
              onDelete={this.handleDelete}
            />
          ))}
        </CSSTransitionGroup>
      </Container>
    );
  }
}

export default Presentation;

const Container = styled.div`
  height: 400px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #e3edf2;
`;
