import React, { Component } from "react";
import styled from "styled-components";
import Button from "material-ui/Button";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: true,
      timerHour: 0,
      timerMinute: 0,
      timerSecond: 0
    };
  }
  render() {
    const { props } = this;
    return (
      <Time>
        <Scoreboard>
          {props.timerHour}:{props.timerMinute}:{props.timerSecond}
        </Scoreboard>
        <Button>{props.timer ? "Стоп" : "Старт"}</Button>
      </Time>
    );
  }
}

export default Timer;

const Time = styled.div`
  height: 40px;
`;
const Scoreboard = styled.div`
  height: 30px;
  width: 100px;
`;
