import React, { Component } from "react";
import styled from "styled-components";
import Availability from "availability";

class Presentation extends Component {
  getInit;
  render() {
    let product1 = [
      "https://cs5.pikabu.ru/images/previews_comm/2015-09_4/1442736127174715446.jpg",
      "Крем",
      "Для увлажнения сухой кожи",
      "68"
    ];
    let product2 = [
      "http://lamcdn.net/the-village.ru/post_image-image/0eAew_WlbB_QU2B0dKsrrQ-wide.jpg",
      "2Крем",
      "2Для увлажнения сухой кожи",
      "268"
    ];
    let product = [product1, product2];
    return (
      <Sty>
        <Img />
        <Bod>
          <div className="name">{product[0][1]}</div>
          <div className="specification">{product[0][2]}</div>
          <div className="price">{product[0][3]}</div>
        </Bod>
        <Availability />
      </Sty>
    );
  }
}

export default Presentation;
const Sty = styled.div`
  height: 400px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #e3edf2;
`;
const Img = styled.div`
  width: 100px;
  height: 100px;
  float: left2;
`;
/*background: url(${props => props.product[0][0]}) no-repeat;*/
const Bod = styled.div`
  float: left;
  background-color: #ffffff;
`;
