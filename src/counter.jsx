import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}
export default Counter;
