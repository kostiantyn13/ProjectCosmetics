import React, { Component } from "react";
import styled from "styled-components";
import Button from "material-ui/Button";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.buttonTimer = this.buttonTimer.bind(this);
    this.state = {
      timer: true,
      timerHour: "00",
      timerMinute: "00",
      timerSecond: "00"
    };
  }

  buttonTimer() {
    this.setState({
      timer: this.state.timer ? false : true,
      timerHour: "22",
      timerMinute: "33",
      timerSecond: "44"
    });
  }
  render() {
    const { state } = this;
    return (
      <Watch>
        <Scoreboard>
          {state.timerHour}:{state.timerMinute}:{state.timerSecond}
        </Scoreboard>

        <Button onClick={this.buttonTimer}>
          {state.timer ? "Стоп" : "Старт"}
        </Button>
      </Watch>
    );
  }
}

export default Stopwatch;

const Watch = styled.div`
  height: 36px;
  width: 220px;
  border: 1px solid #669900;
`;
const Scoreboard = styled.div`
  display: block;
  float: left;
  padding: 10px;
  width: 100px;
`;
