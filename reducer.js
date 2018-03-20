function updateState(state, action) {
  if (action.type === "INCREMENT") {
    return { count: state.count + action.amount }; //c уя ли это именно свойство обьекта state??
  } else if (action.type === "DECREMENT") {
    return { count: state.count - action.amount };
  } else {
    return state;
  }
}

class Store {
  constructor(updateState, state) {
    this._state = state;
    this._updateState = updateState;
    this._callback = [];
  }

  get state() {
    return this._state;
  }

  updete(action) {
    this._state = this._updateState(this._state, action);
    this._callback.forEach(callback => callback());
  }

  subscribe(callback) {
    this._callback.push(callback);
    return () =>
      (this._callback = this._callback.filter(cb => cb !== callback));
  }
}

const initialState = { count: 0 };

const store = new Store(updateState, initialState);

const incrementAction = { type: "INCREMENT", amount: 5 };
const decrementAction = { type: "DECREMENT", amount: 3 };

const unsubscribe = store.subscribe(() =>
  console.log("Новый state " + store.state)
);

store.subscribe(() => console.log("Новый state = " + store.state));

store.updete(incrementAction);
unsubscribe();
store.updete(decrementAction);
store.updete({});
