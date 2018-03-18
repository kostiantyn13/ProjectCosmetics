let state = 0;

function updateState(state, action) {
  if (action.type === "INCREMENT") {
    return state + action.amount;
  } else if (action.type === "DECREMENT") {
    return state - action.amount;
  } else {
    return state;
  }
}

class Store {
  constructor(updateState, state) {
    this._state = state;
    this._updateState = updateState;
  }

  get state() {
    return this._state;
  }

  updete(action) {
    this._state = this._updateState(this._state, action);
  }
}
const incrementAction = { type: "INCREMENT", amount: 5 };
const decrementAction = { type: "DECREMENT", amount: 3 };

state = updateState(state, incrementAction);
console.log(state);
