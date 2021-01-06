const redux = require("redux");
const reduxLogger=require('redux-logger')
const logger=reduxLogger.createLogger()
const applyMiddleware=redux.applyMiddleware
const createStore = redux.createStore;
const combineReducers=redux.combineReducers

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Cake Shop",
  };
}

function buyIceCream()
{
    return{
        type:BUY_ICECREAM,
        info:"Ice Cream Shop"
    }
}

const cakeIntialState={
    noOfCakes:9
}

const iceCreamIntialState={
    noOfIceCreams:19
}


const cakeReducer=(state=cakeIntialState,action)=>
{
    switch(action.type)
    {
        case BUY_CAKE:
            {
                return{
                    ...state,
                    noOfCakes:state.noOfCakes-1
                }
            }
        default :
        {
            return state
        }
    }
}



const iceCreamReducer=(state=iceCreamIntialState,action)=>
{
    switch(action.type)
    {
        case BUY_ICECREAM:
            {
                return{
                    ...state,
                    noOfIceCreams:state.noOfIceCreams-1
                }
            }
            default :
            {
                return state
            }
    }
}


const  rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})


const store=createStore(rootReducer,applyMiddleware(logger))

console.log('Intial State :',store.getState())

const unsubscribe=store.subscribe(()=>{})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())

unsubscribe()



