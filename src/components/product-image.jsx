import React, { Components } from "react";
import styled from "styled-components";

function Img(props) {
  return (
    <Border>
      <Image alt="no photo" src={props.link} />
    </Border>
  );
}
export default Img;

const Image = styled.img`
  display: block;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
`;
const Border = styled.div`
  width: 200px;
  height: 100%;
  float: left;
  margin: 10px;
`;
