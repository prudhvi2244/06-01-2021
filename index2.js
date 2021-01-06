const redux = require("redux");

const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "Cake Shop",
  };
};

const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
    info: "Icecream Shop",
  };
};

const intialState = {
  noOfCakes: 9,
  noOfIceCreams: 19
};



const reducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

console.log("Intial State :", store.getState());

const unsubsribe = store.subscribe(() =>
  console.log("Updated State :", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubsribe();
