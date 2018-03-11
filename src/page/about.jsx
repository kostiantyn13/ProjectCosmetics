import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <h1>О магазине</h1>
      <h2>Режим работы</h2>
      <p>
        ТЕПЕРЬ БЕЗ ВЫХОДНЫХ! 7 ДНЕЙ В НЕДЕЛЮ! Интернет магазин MakeUp работает с
        понедельника по воскресенье с 7:55 до 20:05 Доставка осуществляется с
        понедельника по субботу включительно.
      </p>
      <h2>Контакты</h2>
      <p>
        МЫ ВСЕГДА НА СВЯЗИ! Вы можете написать нам письмо, позвонить нам по
        телефонам (063) 579 44 15
      </p>
    </Container>
  );
};

export default About;

const Container = styled.div`
  border: 1px solid black;
  height: 700px;
  width: 100%;
  background-color: #7896bf;
`;
