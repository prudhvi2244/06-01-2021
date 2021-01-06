const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Cake Shop",
  };
}

const intialCakeState = {
  noOfCakes: 9
}

const reducer = (state = intialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      }
   default:
      return state;
  }
};


const store=createStore(reducer)

console.log('Intial State :',store.getState())

const unsubscribe=store.subscribe(()=>console.log('Updated State :',store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())


unsubscribe()