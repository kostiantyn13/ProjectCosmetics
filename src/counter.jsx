import React, { Component } from "react";
import { createStore } from "./reducer";

const initialState = { count: 0 };
const incrementAction = { type: "INCREMENT", amount: 1 };
const decrementAction = { type: "DECREMENT", amount: 1 };
const resetAction = { type: "RESET" };

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
    case "DECREMENT":
      return { count: state.count - action.amount };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  increment() {
    store.dispatch(incrementAction);
  }

  decrement() {
    store.dispatch(decrementAction);
  }

  reset() {
    store.dispatch(resetAction);
  }

  render() {
    const count = store.getState().count;
    return (
      <div>
        <span>{count}</span>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default Counter;
