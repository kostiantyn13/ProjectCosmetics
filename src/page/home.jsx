import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomePage>
      <h1>COSMO</h1>
      <p>Добро пожаловать в мир косметики с COSMO</p>
    </HomePage>
  );
};

export default Home;

const HomePage = styled.div`
  height: 700px;
`;
