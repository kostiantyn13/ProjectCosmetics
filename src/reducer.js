/*export function createStore(reduser, initialState) {
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
}*/

function updateState(state, action) {
  // state == { count: 0 }
  if (action.type === "INCREMENT") {
    // { count: 1 }
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

  update(action) {
    this._state = this._updateState(this._state, action);
    this._callback.forEach(callback => callback(this._state));
  }

  subscribe(callback) {
    this._callback.push(callback);
    return () =>
      (this._callback = this._callback.filter(cb => cb !== callback));
  }
}

// export default Store;

const initialState = { count: 0 };

const store = new Store(updateState, initialState);

const incrementAction = { type: "INCREMENT", amount: 5 };
const decrementAction = { type: "DECREMENT", amount: 3 };

let x = 0;
let y = null;

console.log("state1", store.state);
console.log("test1x", x);
console.log("test2y", y);

const setX = amount => (x = amount);
console.log("subscribing X");
store.subscribe(st => setX(st.count));

// store.subscribe(st => console.log("Новый state = " + st.count));

store.update(incrementAction);
console.log("state2", store.state);
console.log("test2x", x);
console.log("test2y", y);
// unsubscribe();
store.update(decrementAction);
console.log("state2", store.state);
console.log("test3x", x);
console.log("test3y", y);
// store.update(incrementAction);

const setY = amount => (y = amount);
console.log("subscribing Y");
store.subscribe(st => setY(st.count));

store.update(incrementAction);
console.log("state4", store.state);
console.log("test4x", x);
console.log("test4y", y);

store.update(incrementAction);
console.log("state5", store.state);
console.log("test5x", x);
console.log("test5y", y);
