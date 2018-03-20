export function createStore(reduser, initialState) {
  let state = initialState;
  let callbacks = [];
  const getState = () => state;
  const dispatch = action => {
    state = reduser(state, action);
    callbacks.forEach(callback => callback());
  };
  const subscribe = callback => {
    callbacks.push(callback);
    return () => callbacks.filter(cb => cb !== callback);
  };
  dispatch({});
  return { getState, dispatch, subscribe };
}

/*function updateState(state, action) {
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

export default Store;

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
store.updete({});*/
