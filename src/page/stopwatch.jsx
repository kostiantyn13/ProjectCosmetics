import React, { Component } from "react";
import styled from "styled-components";
import Button from "material-ui/Button";

import Counter from "../counter";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.buttonPause = this.buttonPause.bind(this);
    this.buttonStart = this.buttonStart.bind(this);
    this.buttonStop = this.buttonStop.bind(this);
    this.tick = this.tick.bind(this);
    this.state = {
      running: false,
      lastTick: 0,
      elapse: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick() {
    if (this.state.running) {
      let now = Date.now();
      let diff = now - this.state.lastTick;
      this.setState({
        lastTick: now,
        elapse: this.state.elapse + diff
      });
    }
  }
  buttonStart() {
    this.setState({
      running: true,
      lastTick: Date.now()
    });
  }
  buttonPause() {
    this.setState({
      running: false
    });
  }
  buttonStop() {
    this.setState({
      running: false,
      elapse: 0
    });
  }
  timeStopwatch(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let second = totalSeconds % 60;
    let minute = Math.floor(totalSeconds / 60) % 60;
    let hour = Math.floor(totalSeconds / 3600) % 24;
    return `${hour > 9 ? hour : "0" + hour}:${
      minute > 9 ? minute : "0" + minute
    }:${second > 9 ? second : "0" + second}`;
  }
  render() {
    const { state } = this;
    return (
      <Container>
        <Scoreboard>{this.timeStopwatch(state.elapse)}</Scoreboard>

        {state.running ? (
          <Button onClick={this.buttonPause}>PAUSE</Button>
        ) : (
          <Button onClick={this.buttonStart}>START</Button>
        )}

        <Button onClick={this.buttonStop}>STOP</Button>
        <Counter />
      </Container>
    );
  }
}

export default Stopwatch;

const Container = styled.div`
  height: 36px;
  width: 307px;
  border: 1px solid #669900;
  margin: 300px auto;
`;
const Scoreboard = styled.div`
  display: block;
  float: left;
  padding: 10px;
  width: 100px;
`;
