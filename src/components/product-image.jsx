import React, { Components } from "react";
import styled from "styled-components";

function Img(props) {
  return <Image />;
}
export default Img;

const Image = styled.img`
  src: url(${props => props.link});
  height: 50px;
`;
